function ajouter(){
    var verificationsForm = document.forms.verifications;
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
          !document.verifications.telephone.checkValidity()||
          !document.verifications.profession.checkValidity() ||
          !document.verifications.mail.checkValidity()
         ) {
               return
            }
       
    
    newItem.append(nometPrenomTd, dateNaissanceTd, professionTd, telephoneTd, mailTd)

    const table = document.querySelector('.verif tbody')
    table.appendChild(newItem)
}

(function() { 
    const allLabel = document.querySelectorAll('.details');
    const allInput = [];
    let isValid = true;
        allLabel.forEach((label) => {
        allInput.push(label.nextElementSibling);
    })

    console.log(allInput);
    allInput.forEach((input) => {
        input.addEventListener('keyup', () => {
            const p = document.querySelector('text-error');
            if(input.value.length < 6) {
                input.style.borderColor = "red";
                input.nextElementSibling.style.display= 'block';
            }else{
                input.style.borderColor = "lightGreen";
                input.nextElementSibling.style.display= 'none';
            }
            console.log(input.value);
        })
    })

    document.querySelector('#Rejoindre').addEventListener('submit', (e) => {
        e.preventDefault();
        if(allInput[0].value.length > 6 
            && allInput[1].value.length > 6
            && allInput[2].value.length > 6
            && allInput[3].value.length > 6
            && allInput[4].value.length > 6
            && allInput[5].value.length > 6) {
                isValid = true;
            }else{
                isValid = false;
            }
            console.log(isValid);
        if(isValid) {
            const tab = [];
            allInput.forEach((input) => {
                tab.push(input.value);
            })
            window.sessionStorage.setItem("user" ,JSON.stringify(tab));
            console.log(window.sessionStorage.getItem("user"));
            const textSuccess = document.querySelector('.text-success');
                textSuccess.style.display = 'block';
                window.setTimeout(() => textSuccess.style.display = 'none',3000);
                window.setTimeout(() => document.querySelector('#Rejoindre').reset(),3000);

        }
    })
})();
 



