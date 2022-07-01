function Validar(user,pwd)
  {
   user=document.getElementById(user);
   pwd=document.getElementById(pwd);
   if(user.value=="")
    {
     alert("El campo Nombre esta vacio");
     user.focus();
     return false;
    }
   else
    {
     if(pwd.value=="")
      {
       alert("El campo Contraseña esta vacio");
       pwd.focus();
       return false;
      }
     else
      {
       return true;
      }
    }
  }

