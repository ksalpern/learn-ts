type Person = {
  name: string;
  email?: string | null | undefined;
};

function sendEmail(email: string): void {
  console.log(`send email to ${email}!`);
}

function contact(person: Person): void {
  console.log(`contact ${person.name} at ${person.email}`);
  if (person.email === null || person.email === undefined) {
    throw new Error("Email is missing!");
  }
  sendEmail(person.email);
}
