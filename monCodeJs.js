<script>
    var verificationsForm = document.forms.verifications; 


function ajouter(){

    console.log(verificationsForm.elements.nometPrenom.value)
    console.log(verificationsForm.elements.dateNaissance.value)
    console.log(verificationsForm.elements.profession.value)
    console.log(verificationsForm.elements.telephone.value)
    console.log(verificationsForm.elements.mail.value)


    const newItem = document.createElement('tr')
    const nometPrenomTd = document.createElement('td')
    const dateNaissanceTd = document.createElement('td')
    const professionTd = document.createElement('td')
    const telephoneTd = document.createElement('td')
    const mailTd = document.createElement('td')
    nometPrenomTd.textContent = document.verifications.nometPrenom.value
    dateNaissanceTd.textContent = document.verifications.dateNaissance.value
    professionTd.textContent = document.verifications.profession.value
    telephoneTd.textContent = document.verifications.telephone.value
    mailTd.textContent = document.verifications.mail.value
    
   
    console.log(telephoneTd.textContent)
    console.log(mailTd.textContent)

    if (!document.verifications.nometPrenom.checkValidity() ||
          !document.verifications.dateNaissance.checkValidity() ||
          !document.verifications.telephone.checkValidity()
         ) {
               return
        }
    
    newItem.append(nometPrenomTd, dateNaissanceTd, professionTd, telephoneTd, mailTd)

    const table = document.querySelector('.verif tbody')
    table.appendChild(newItem)

}
</script>