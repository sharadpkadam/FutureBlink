import agenda from "../config/agenda.js";

export async function apiSchedule(req, res) {
  try {
    const { recipient, subject, body, delayInSeconds } = req.body;

    if (!recipient || !subject || !body || delayInSeconds === undefined) {
      return res.status(400).json({
        message: "Recipient, subject, body, and delayInSeconds are required",
      });
    }

    const scheduleTime = new Date(Date.now() + delayInSeconds * 60 * 1000);

    await agenda.schedule(scheduleTime, "send cold email", {
      recipient,
      subject,
      body,
      scheduledTime: scheduleTime.toISOString(),
    });

    res.status(200).json({
      message: "Email scheduled successfully",
      scheduledTime: scheduleTime.toISOString(),
    });
  } catch (error) {
    console.error("Error scheduling email:", error);
    res.status(500).json({ message: "Failed to schedule email" });
  }
}

export async function scheduleEmails(leads, emailTemplate, delayDuration) {
  for (const lead of leads) {
    const emailData = {
      recipient: lead.emailAddress,
      subject: emailTemplate.subject,
      body: emailTemplate.body,
      delayInSeconds: delayDuration,
    };

    try {
      await apiSchedule({ body: emailData }, { status: () => ({ json: () => {} }) });
    } catch (error) {
      console.error(`Failed to schedule email for ${lead.emailAddress}:`, error.message);
    }
  }
}
