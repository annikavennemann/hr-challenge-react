export default function getJournalEntries() {
    return fetch('http://localhost:4000/brands')
      .then(res => res.json())
      .catch(error => console.log(error))
}