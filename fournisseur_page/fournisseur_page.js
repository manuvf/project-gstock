function addElement () {
    const add_row = document.querySelector('#btnAdd')
    
    // ADD AN ELEMENT TO THE ROW ACCORDING TO PROMPT INPUT //
    
    add_row.addEventListener('click', () => {

        const rowModel = document.querySelector('#rowPrototype');
        const copycat = rowModel.cloneNode(true);
        copycat.style.display = "table-row";

        let supplierName = prompt('Indiquez le nom de votre fournisseur');
        copycat.querySelector('#name').innerText = supplierName;
        while (supplierName === ""){
            supplierName = prompt('Merci de préciser le nom de votre fournisseur');
            copycat.querySelector('#name').innerHTML = supplierName;
        }
        if (supplierName === null){
           return;
        }
        let supplierEmail = prompt("Indiquez l'adresse mail de votre fournisseur");
        copycat.querySelector('#email').innerHTML = supplierEmail;
        while (supplierEmail === ""){
            supplierEmail = prompt('Merci de préciser le mail de votre fournisseur');
            copycat.querySelector('#email').innerHTML = supplierEmail;
        }
        if(supplierEmail === null){
            return;
        }
        let supplierPhone = prompt("Indiquez le numéro de téléphone de votre fournisseur");
        copycat.querySelector('#phone').innerHTML = supplierPhone;
        while (supplierPhone === ""){
            supplierName = prompt('Merci de préciser le nom de votre fournisseur');
            copycat.querySelector('#phone').innerHTML = supplierPhone;
        }
        if(supplierPhone === null){
            return;
        }

        // DELETES AN EXISTENT ELEMENT FROM THE ROW ON DELETE BUTTON CLICK //
        
        const delete_row = copycat.querySelector('#btnDelete');
        delete_row.addEventListener('click', () => {
            copycat.parentNode.removeChild(copycat);
        });

        // EDITS AN EXISTENT ELEMENT FROM THE ROW ON EDIT BUTTON CLICK //
        const edit_row = copycat.querySelector('#btnEdit');
        edit_row.addEventListener('click', () => {
            let old_name = copycat.querySelector('#name').innerHTML;
            let edit_name = prompt('Modifiez le nom de votre fournisseur', old_name);
            let new_name = copycat.querySelector('#name');
            new_name.innerHTML = edit_name;
            if (edit_name === null || edit_name === '') {
                new_name.innerHTML = old_name;
            }

            let old_email = copycat.querySelector('#email').innerHTML;
            let edit_email = prompt("Modifiez l'adresse mail de votre fournisseur", old_email);
            let new_email = copycat.querySelector('#email');
            new_email.innerHTML = edit_email;
            if (edit_email === null || edit_email === '') {
                new_email.innerHTML = old_email;
            }

            let old_phone = copycat.querySelector('#phone').innerHTML;
            let edit_phone = prompt('Modifiez le numéro téléphone de votre fournisseur', old_phone);
            let new_phone = copycat.querySelector('#phone');
            new_phone.innerHTML = edit_phone;
            if (edit_email === null || edit_email === '') {
                new_email.innerHTML = old_email;
            }        
        });

        document.querySelector("tbody").appendChild(copycat);
    })
}

addElement()








