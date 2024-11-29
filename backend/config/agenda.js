import Agenda from "agenda";
import dotenv from "dotenv";
import { sendEmail } from "../utils/email.js";

dotenv.config();

const agenda = new Agenda({
  db: { address: process.env.MONGO_URI, collection: "agendaJobs" },
});

// Define the email-sending job
agenda.define("send cold email", async (job, done) => {
  try {
    const { recipient, subject, body, scheduledTime } = job.attrs.data;
    console.log("Executing email job:", {
      recipient,
      scheduledTime: new Date(scheduledTime).toISOString(),
    });

    await sendEmail(recipient, subject, body);
    done();
  } catch (error) {
    console.error("Error in job execution:", error);
    done(error);
  }
});

export default agenda;
