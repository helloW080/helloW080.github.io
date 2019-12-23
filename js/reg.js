// JavaScript Document// JavaScript Document

function $(elementId){
  return document.getElementById(elementId).value;
    }
function divId(elementId){
  return document.getElementById(elementId);
    }
   
function checkUser(){
  var user=$("user");
  var userId=divId("user_prompt");
   userId.innerHTML="";    
  var reg=/^[a-zA-Z][a-zA-Z0-9]{4,16}$/;    
    if(reg.test(user)==false){
       userId.innerHTML="用户名不正确";
    return false;
      }
      return true;
    }
  
function checkPwd(){
  var pwd=$("pwd");
  var pwdId=divId("pwd_prompt");
   pwdId.innerHTML="";    
  var reg=/^[a-zA-Z0-9]{4,10}$/;    
    if(reg.test(pwd)==false){
       pwdId.innerHTML="密码不能含有非法字符，长度在4-10之间";
    return false;
      }
      return true;
    }
    
function checkRepwd(){
  var repwd=$("repwd");
  var pwd=$("pwd");
  var repwdId=divId("repwd_prompt");
   repwdId.innerHTML="";
    if(pwd!=repwd){
       repwdId.innerHTML="两次输入的密码不一致";
    return false;
      }
      return true;
    }


function checkEmail(){
  var email=$("email");
  var email_prompt=divId("email_prompt");
  email_prompt.innerHTML="";
  var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;    
    if(reg.test(email)==false){
      email_prompt.innerHTML="Email格式不正确，例如HelloWorld@gmail.com";
    return false;
      }
      return true;
}

function checkMobile(){
    var mobile=$("mobile");
    var mobileId=divId("mobile_prompt");
    var regMobile=/^1\d{10}$/;
    if(regMobile.test(mobile)==false){
        mobileId.innerHTML="手机号码不正确，请重新输入";
        return false;
        }
        mobileId.innerHTML="";
        return true;
    }