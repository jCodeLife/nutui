import{c as t}from"./mobile.d902ab5e.js";import{r as s,o,c as a,f as i,I as n}from"./vendor.b2fcf8d5.js";import"./index.5e9b6455.js";const{createDemo:e}=t("toast"),r=e({setup(){const{proxy:t}=n();return{textToast:s=>{t.$toast.text(s)},successToast:s=>{t.$toast.success(s)},errorToast:s=>{t.$toast.fail(s)},warningToast:s=>{t.$toast.warn(s)},loadingToast:s=>{t.$toast.loading(s)}}}}),l={class:"demo"},c=i("h2",null,"基本用法",-1);r.render=function(t,n,e,r,d,u){const T=s("nut-cell");return o(),a("div",l,[c,i(T,{title:"Text 文字提示","is-link":"",onClick:n[1]||(n[1]=s=>t.textToast("网络失败，请稍后再试~"))}),i(T,{title:"Success 成功提示","is-link":"",onClick:n[2]||(n[2]=s=>t.successToast("成功提示"))}),i(T,{title:"Error 失败提示","is-link":"",onClick:n[3]||(n[3]=s=>t.errorToast("失败提示"))}),i(T,{title:"Warning 警告提示","is-link":"",onClick:n[4]||(n[4]=s=>t.warningToast("警告提示"))}),i(T,{title:"Loading 加载提示","is-link":"",onClick:n[5]||(n[5]=s=>t.loadingToast("加载中"))})])};export default r;
