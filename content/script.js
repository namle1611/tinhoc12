function login()
{
  let u = username.value
  let p = pword.value
  if (u =="namle" && p=="1234")
  {
    window.open("trangchu.html")
    document.getElementById(compiler).style.display="block"
  }
  if (u !="namle" && p!="1234")
  {
    window.open()
    document.getElementById(compiler).style.display="block"
}
