import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Please fill in all fields.',
      })
    }

    const { data, error } = await resend.emails.send({
      from: 'Helping Hands of Peel <onboarding@resend.dev>',
      to: ['helpinghandsofpeel@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    if (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Failed to send email.',
      })
    }

    return res.status(200).json({
      message: 'Email sent successfully!',
      data,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: 'Something went wrong.',
    })
  }
}