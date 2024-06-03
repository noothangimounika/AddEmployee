/*document.getElementById('addEmployee').addEventListener('click',function(){
    document.getElementById('dataForm').style.display='block';

});
*/
    Document.getElementById('dataform').addEventListener('submit',function(event){
    event.preventDefault();

    var employeeid=document.getElementById('employeeid').value;
    var employeename=document.getElementById('employeename').value;
    var position=document.getElementById('position').value;
    var submit=document.getElementsByTagName('input').value;


if(employeeid==='' ||employeename==='' || position===''  ){
    alert('Nothimg');
    return;
} 

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0]; 
    var newRow = table.insertRow();

   
   var cell1 = newRow.insertCell(0);
   
   var cell2 = newRow.insertCell(1)
   
   var cell3 = newRow.insertCell(2);
   

   cell1.innerHTML = employeeid;
   
   cell2.innerHTML = employeename;
   
   cell3.innerHTML = position;
   
   
   
   document.getElementById('dataform').reset();
   
 });



  

 
