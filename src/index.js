export const project = {
  slug: "smart-expense-api",
  title: "Smart Expense API",
  description: "Personal income and expense tracking REST API.",
  features: [
  "User registration",
  "JWT authentication",
  "Income and expense records",
  "Category management",
  "Monthly reporting",
  "Excel export"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
