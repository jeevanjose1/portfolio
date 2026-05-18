import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, projectType, timeline, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sentAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Project Inquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Project Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f7f8fa;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="580" cellpadding="0" cellspacing="0" border="0"
          style="max-width:580px;width:100%;background-color:#ffffff;border-radius:16px;border:1px solid #d8dee7;overflow:hidden;">

          <!-- Top accent line -->
          <tr>
            <td style="height:3px;background-color:#111827;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                      New Inquiry
                    </p>
                    <h1 style="margin:0;font-size:22px;font-weight:750;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.3;">
                      Project Submission
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <div style="width:44px;height:44px;background-color:#f1f3f6;border-radius:10px;border:1px solid #e1e5eb;text-align:center;line-height:44px;font-size:20px;">
                      📬
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="height:1px;background-color:#e1e5eb;"></td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td style="padding:14px 40px;background-color:#f7f8fa;">
              <p style="margin:0;font-size:11px;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                Received on &nbsp;<strong style="color:#111827;">${sentAt}</strong>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="height:1px;background-color:#e1e5eb;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">

              <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                Contact Details
              </p>

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f7f8fa;border-radius:10px;border:1px solid #e1e5eb;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f7f8fa;border-radius:10px;border:1px solid #e1e5eb;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Email</p>
                    <p style="margin:0;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                      <a href="mailto:${email}" style="color:#111827;text-decoration:none;font-weight:600;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Project Type + Timeline -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td width="49%" style="padding:14px 16px;background-color:#f7f8fa;border-radius:10px;border:1px solid #e1e5eb;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Project Type</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${projectType || '—'}</p>
                  </td>
                  <td width="2%"></td>
                  <td width="49%" style="padding:14px 16px;background-color:#f7f8fa;border-radius:10px;border:1px solid #e1e5eb;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Timeline</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${timeline || '—'}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#667085;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                Message
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:18px 20px;background-color:#f1f3f6;border-radius:10px;border:1px solid #e1e5eb;">
                    <p style="margin:0;font-size:14px;line-height:1.75;color:#374151;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                      ${message.replace(/\n/g, '<br/>')}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your Project Inquiry"
                      style="display:inline-block;padding:13px 32px;background-color:#111827;border-radius:8px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;text-decoration:none;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="height:1px;background-color:#e1e5eb;"></td>
          </tr>
          <tr>
            <td style="padding:18px 40px;background-color:#f7f8fa;">
              <p style="margin:0;font-size:11px;color:#667085;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                Sent via your website contact form · Do not reply to this automated message
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}