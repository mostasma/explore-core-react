const ticketsData = [
  { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still can't sign in.", customer: "John Smith", priority: "High Priority", status: "Open", createdAt: "11/15/2024", tag: "open" },
  { id: 1002, title: "Payment Failed - Card Declined", description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.", customer: "Sarah Johnson", priority: "High Priority", status: "Open", createdAt: "1/6/2024", tag: "open" },
  { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section.", customer: "Michael Brown", priority: "Medium Priority", status: "In Progress", createdAt: "1/17/2024", tag: "inprogress" },
  { id: 1004, title: "Incorrect Billing Address", description: "Customer's billing address shows a different city; they updated but the old address displays.", customer: "Emily Davis", priority: "Low Priority", status: "Open", createdAt: "1/2/2024", tag: "open" },
  { id: 1005, title: "App Crash on Launch", description: "App crashes immediately upon opening on Android 13 for certain devices.", customer: "David Wilson", priority: "High Priority", status: "Open", createdAt: "1/9/2024", tag: "open" },
  { id: 1006, title: "Refund Not Processed", description: "Customer requested a refund two weeks ago but has not received it.", customer: "Sophia Taylor", priority: "Medium Priority", status: "In Progress", createdAt: "1/20/2024", tag: "inprogress" },
  { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer not receiving 2FA codes on their registered phone number.", customer: "James Anderson", priority: "High Priority", status: "Open", createdAt: "1/21/2024", tag: "open" },
  { id: 1008, title: "Unable to Update Profile Picture", description: "Customer tries to upload a new avatar but gets 'Upload failed' error.", customer: "Olivia Martinez", priority: "Low Priority", status: "Open", createdAt: "1/22/2024", tag: "open" },
  { id: 1009, title: "Subscription Auto-Renewal", description: "Customer wants to enable auto-renewal but the toggle is disabled.", customer: "Liam Thomas", priority: "Medium Priority", status: "Open", createdAt: "1/17/2024", tag: "open" },
  { id: 1010, title: "Missing Order Confirmation Email", description: "Customer placed an order but did not receive confirmation email.", customer: "Isabella Garcia", priority: "Medium Priority", status: "Open", createdAt: "1/24/2024", tag: "open" },
];

export default ticketsData;
