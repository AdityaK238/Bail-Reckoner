'use server';

async function sendWelcomeEmail(formData: FormData) {
  const email = formData.get('email') as string;
  // This is where you'd typically integrate with an email service
  // For demonstration, we'll just simulate sending an email
  console.log(`Sending welcome email to ${email}`);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Welcome email sent successfully!" };
}

export default sendWelcomeEmail;