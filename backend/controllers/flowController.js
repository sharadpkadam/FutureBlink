import Flow from "../models/Flow.js";
import agenda from "../config/agenda.js";
import { scheduleEmails } from "./scheduleController.js";

export async function saveFlow(req, res) {
  try {
    const { nodes, edges } = req.body;
    console.log(req.body);
    const flow = new Flow({ nodes, edges });
    await flow.save();

    let leads = [];

    for (const node of nodes) {
      if (node.type === "leadSource") {
        leads = await Lead.find({ source: node.data.value });
        console.log(`Leads found for source ${node.data.value}:`, leads);
      }
      if (node.type === "coldEmail") {
        const emailTemplate = await EmailTemplate.findOne({
          templateType: node.data.value,
        });
        console.log("This email template will be used:", emailTemplate);

        const delayEdge = edges.find(
          (edge) =>
            edge.target === node.id &&
            nodes.find((n) => n.id === edge.source && n.type === "waitDelay")
        );

        const delayNode = nodes.find(
          (n) => n.id === delayEdge?.source && n.type === "waitDelay"
        );

        console.log("This is the delay node:", delayNode);

        const delayDuration = delayNode ? delayNode.data.value || 0 : 0;

        console.log("Email template body:", emailTemplate.body);

        if (leads.length > 0) {
          await scheduleEmails(leads, emailTemplate, delayDuration);
        } else {
          console.log("No leads found for email scheduling.");
        }
      }
    }

    await agenda.start();

    res.status(200).json({ message: "Flow saved and emails scheduled" });
  } catch (error) {
    console.error("Error saving flow:", error);
    res.status(500).json({ message: "Failed to save flow or schedule email" });
  }
}
