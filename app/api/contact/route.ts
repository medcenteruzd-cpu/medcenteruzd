import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_TO, 
        pass: process.env.EMAIL_PASS, 
      },
    });

  const mailOptions = {
      from: `"Uzduman Медцентр" <${process.env.EMAIL_TO}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🏥 Новий запис: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { margin: 0; padding: 0; background-color: #edf5fd; }
            .wrapper { width: 100%; table-layout: fixed; background-color: #edf5fd; padding-bottom: 40px; padding-top: 40px; }
            .main-card { 
              max-width: 600px; 
              background-color: #ffffff; 
              margin: 0 auto; 
              border-radius: 20px; 
              overflow: hidden; 
              box-shadow: 0 10px 25px rgba(19, 59, 136, 0.1);
              font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            }
            .header { 
              background-color: #133b88; 
              padding: 40px 20px; 
              text-align: center; 
              color: #ffffff;
            }
            .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 40px 30px; color: #333333; }
            .info-row { margin-bottom: 25px; border-left: 4px solid #5397F4; padding-left: 15px; }
            .label { font-size: 12px; color: #133b88; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
            .value { font-size: 18px; color: #1d1d1f; }
            .message-box { 
              background-color: #f8fbff; 
              border: 1px solid #d0e3ff; 
              padding: 20px; 
              border-radius: 12px; 
              margin-top: 10px;
              font-style: italic;
              color: #444;
            }
            .footer { 
              text-align: center; 
              padding: 25px; 
              font-size: 13px; 
              color: #133b88; 
              background-color: #ffffff;
              border-top: 1px solid #edf5fd;
            }
            .btn-reply {
              display: inline-block;
              padding: 12px 25px;
              background-color: #5397F4;
              color: #ffffff !important;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="main-card">
              <div class="header">
                <h1>Медичний центр УЗД</h1>
                <p style="margin-top: 10px; opacity: 0.9;">Нова заявка на прийом</p>
              </div>
              
              <div class="content">
                <div class="info-row">
                  <div class="label">Пацієнт</div>
                  <div class="value"><strong>${name}</strong></div>
                </div>
                
                <div class="info-row">
                  <div class="label">Контактний телефон</div>
                  <div class="value">
                    <a href="tel:${phone}" style="color: #133b88; text-decoration: none; font-weight: bold;">${phone}</a>
                  </div>
                </div>

                <div class="info-row">
                  <div class="label">Електронна пошта</div>
                  <div class="value">${email}</div>
                </div>
                
                <div style="margin-top: 30px;">
                  <div class="label">Коментар пацієнта:</div>
                  <div class="message-box">
                    ${message ? message.replace(/\n/g, '<br>') : "Без додаткового повідомлення"}
                  </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}" class="btn-reply">Відповісти пацієнту</a>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 0;">📍 м.Умань вул.Шевченка 50</p>
                <p style="margin: 5px 0 0 0;">Це автоматичне сповіщення з вашого сайту</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("ПОМИЛКА РОУТЕРА:", error);
    return NextResponse.json(
      { success: false, error: "Помилка при відправці листа" },
      { status: 500 }
    );
  }
}