// We can also use loop to add element to a set.

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
// Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
