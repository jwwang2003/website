!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define(n);else{var r=n();for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={exports:{},id:e,loaded:!1};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){n.glMatrix=r(1),n.mat2=r(2),n.mat2d=r(3),n.mat3=r(4),n.mat4=r(5),n.quat=r(6),n.vec2=r(9),n.vec3=r(7),n.vec4=r(8)},function(t,n){var r={EPSILON:1e-6};r.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,r.RANDOM=Math.random,r.setMatrixArrayType=function(t){GLMAT_ARRAY_TYPE=t};var e=Math.PI/180;r.toRadian=function(t){return t*e},t.exports=r},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},clone:function(t){var n=new e.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},transpose:function(t,n){if(t===n){var r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},invert:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=r*o-a*e;return u?(u=1/u,t[0]=o*u,t[1]=-e*u,t[2]=-a*u,t[3]=r*u,t):null},adjoint:function(t,n){var r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=r[0],c=r[1],f=r[2],s=r[3];return t[0]=e*i+o*c,t[1]=a*i+u*c,t[2]=e*f+o*s,t[3]=a*f+u*s,t}};a.mul=a.multiply,a.rotate=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=e*c+o*i,t[1]=a*c+u*i,t[2]=e*-i+o*c,t[3]=a*-i+u*c,t},a.scale=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=r[0],c=r[1];return t[0]=e*i,t[1]=a*i,t[2]=o*c,t[3]=u*c,t},a.fromRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=-r,t[3]=e,t},a.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},a.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},a.LDU=function(t,n,r,e){return t[2]=e[2]/e[0],r[0]=e[0],r[1]=e[1],r[3]=e[3]-t[2]*r[1],[t,n,r]},t.exports=a},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},clone:function(t){var n=new e.ARRAY_TYPE(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},invert:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=r*o-e*a;return c?(c=1/c,t[0]=o*c,t[1]=-e*c,t[2]=-a*c,t[3]=r*c,t[4]=(a*i-o*u)*c,t[5]=(e*u-r*i)*c,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1],h=r[2],l=r[3],v=r[4],M=r[5];return t[0]=e*f+o*s,t[1]=a*f+u*s,t[2]=e*h+o*l,t[3]=a*h+u*l,t[4]=e*v+o*M+i,t[5]=a*v+u*M+c,t}};a.mul=a.multiply,a.rotate=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=Math.sin(r),s=Math.cos(r);return t[0]=e*s+o*f,t[1]=a*s+u*f,t[2]=e*-f+o*s,t[3]=a*-f+u*s,t[4]=i,t[5]=c,t},a.scale=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1];return t[0]=e*f,t[1]=a*f,t[2]=o*s,t[3]=u*s,t[4]=i,t[5]=c,t},a.translate=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1];return t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=e*f+o*s+i,t[5]=a*f+u*s+c,t},a.fromRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=-r,t[3]=e,t[4]=0,t[5]=0,t},a.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},a.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},a.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},t.exports=a},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat4:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},clone:function(t){var n=new e.ARRAY_TYPE(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,n){if(t===n){var r=n[1],e=n[2],a=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=e,t[7]=a}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},invert:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=s*u-i*f,l=-s*o+i*c,v=f*o-u*c,M=r*h+e*l+a*v;return M?(M=1/M,t[0]=h*M,t[1]=(-s*e+a*f)*M,t[2]=(i*e-a*u)*M,t[3]=l*M,t[4]=(s*r-a*c)*M,t[5]=(-i*r+a*o)*M,t[6]=v*M,t[7]=(-f*r+e*c)*M,t[8]=(u*r-e*o)*M,t):null},adjoint:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8];return t[0]=u*s-i*f,t[1]=a*f-e*s,t[2]=e*i-a*u,t[3]=i*c-o*s,t[4]=r*s-a*c,t[5]=a*o-r*i,t[6]=o*f-u*c,t[7]=e*c-r*f,t[8]=r*u-e*o,t},determinant:function(t){var n=t[0],r=t[1],e=t[2],a=t[3],o=t[4],u=t[5],i=t[6],c=t[7],f=t[8];return n*(f*o-u*c)+r*(-f*a+u*i)+e*(c*a-o*i)},multiply:function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=r[0],v=r[1],M=r[2],p=r[3],m=r[4],d=r[5],g=r[6],y=r[7],A=r[8];return t[0]=l*e+v*u+M*f,t[1]=l*a+v*i+M*s,t[2]=l*o+v*c+M*h,t[3]=p*e+m*u+d*f,t[4]=p*a+m*i+d*s,t[5]=p*o+m*c+d*h,t[6]=g*e+y*u+A*f,t[7]=g*a+y*i+A*s,t[8]=g*o+y*c+A*h,t}};a.mul=a.multiply,a.translate=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=r[0],v=r[1];return t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=l*e+v*u+f,t[7]=l*a+v*i+s,t[8]=l*o+v*c+h,t},a.rotate=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=Math.sin(r),v=Math.cos(r);return t[0]=v*e+l*u,t[1]=v*a+l*i,t[2]=v*o+l*c,t[3]=v*u-l*e,t[4]=v*i-l*a,t[5]=v*c-l*o,t[6]=f,t[7]=s,t[8]=h,t},a.scale=function(t,n,r){var e=r[0],a=r[1];return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=a*n[3],t[4]=a*n[4],t[5]=a*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},a.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},a.fromRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=-r,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromMat2d=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},a.fromQuat=function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=r+r,i=e+e,c=a+a,f=r*u,s=e*u,h=e*i,l=a*u,v=a*i,M=a*c,p=o*u,m=o*i,d=o*c;return t[0]=1-h-M,t[3]=s-d,t[6]=l+m,t[1]=s+d,t[4]=1-f-M,t[7]=v-p,t[2]=l-m,t[5]=v+p,t[8]=1-f-h,t},a.normalFromMat4=function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],v=n[11],M=n[12],p=n[13],m=n[14],d=n[15],g=r*i-e*u,y=r*c-a*u,A=r*f-o*u,w=e*c-a*i,R=e*f-o*i,b=a*f-o*c,q=s*p-h*M,P=s*m-l*M,x=s*d-v*M,E=h*m-l*p,Y=h*d-v*p,T=l*d-v*m,S=g*T-y*Y+A*E+w*x-R*P+b*q;return S?(S=1/S,t[0]=(i*T-c*Y+f*E)*S,t[1]=(c*x-u*T-f*P)*S,t[2]=(u*Y-i*x+f*q)*S,t[3]=(a*Y-e*T-o*E)*S,t[4]=(r*T-a*x+o*P)*S,t[5]=(e*x-r*Y-o*q)*S,t[6]=(p*b-m*R+d*w)*S,t[7]=(m*A-M*b-d*y)*S,t[8]=(M*R-p*A+d*g)*S,t):null},a.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},t.exports=a},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},clone:function(t){var n=new e.ARRAY_TYPE(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transpose:function(t,n){if(t===n){var r=n[1],e=n[2],a=n[3],o=n[6],u=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=o,t[11]=n[14],t[12]=a,t[13]=u,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},invert:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],v=n[11],M=n[12],p=n[13],m=n[14],d=n[15],g=r*i-e*u,y=r*c-a*u,A=r*f-o*u,w=e*c-a*i,R=e*f-o*i,b=a*f-o*c,q=s*p-h*M,P=s*m-l*M,x=s*d-v*M,E=h*m-l*p,Y=h*d-v*p,T=l*d-v*m,S=g*T-y*Y+A*E+w*x-R*P+b*q;return S?(S=1/S,t[0]=(i*T-c*Y+f*E)*S,t[1]=(a*Y-e*T-o*E)*S,t[2]=(p*b-m*R+d*w)*S,t[3]=(l*R-h*b-v*w)*S,t[4]=(c*x-u*T-f*P)*S,t[5]=(r*T-a*x+o*P)*S,t[6]=(m*A-M*b-d*y)*S,t[7]=(s*b-l*A+v*y)*S,t[8]=(u*Y-i*x+f*q)*S,t[9]=(e*x-r*Y-o*q)*S,t[10]=(M*R-p*A+d*g)*S,t[11]=(h*A-s*R-v*g)*S,t[12]=(i*P-u*E-c*q)*S,t[13]=(r*E-e*P+a*q)*S,t[14]=(p*y-M*w-m*g)*S,t[15]=(s*w-h*y+l*g)*S,t):null},adjoint:function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],v=n[11],M=n[12],p=n[13],m=n[14],d=n[15];return t[0]=i*(l*d-v*m)-h*(c*d-f*m)+p*(c*v-f*l),t[1]=-(e*(l*d-v*m)-h*(a*d-o*m)+p*(a*v-o*l)),t[2]=e*(c*d-f*m)-i*(a*d-o*m)+p*(a*f-o*c),t[3]=-(e*(c*v-f*l)-i*(a*v-o*l)+h*(a*f-o*c)),t[4]=-(u*(l*d-v*m)-s*(c*d-f*m)+M*(c*v-f*l)),t[5]=r*(l*d-v*m)-s*(a*d-o*m)+M*(a*v-o*l),t[6]=-(r*(c*d-f*m)-u*(a*d-o*m)+M*(a*f-o*c)),t[7]=r*(c*v-f*l)-u*(a*v-o*l)+s*(a*f-o*c),t[8]=u*(h*d-v*p)-s*(i*d-f*p)+M*(i*v-f*h),t[9]=-(r*(h*d-v*p)-s*(e*d-o*p)+M*(e*v-o*h)),t[10]=r*(i*d-f*p)-u*(e*d-o*p)+M*(e*f-o*i),t[11]=-(r*(i*v-f*h)-u*(e*v-o*h)+s*(e*f-o*i)),t[12]=-(u*(h*m-l*p)-s*(i*m-c*p)+M*(i*l-c*h)),t[13]=r*(h*m-l*p)-s*(e*m-a*p)+M*(e*l-a*h),t[14]=-(r*(i*m-c*p)-u*(e*m-a*p)+M*(e*c-a*i)),t[15]=r*(i*l-c*h)-u*(e*l-a*h)+s*(e*c-a*i),t},determinant:function(t){var n=t[0],r=t[1],e=t[2],a=t[3],o=t[4],u=t[5],i=t[6],c=t[7],f=t[8],s=t[9],h=t[10],l=t[11],v=t[12],M=t[13],p=t[14],m=t[15];return(n*u-r*o)*(h*m-l*p)-(n*i-e*o)*(s*m-l*M)+(n*c-a*o)*(s*p-h*M)+(r*i-e*u)*(f*m-l*v)-(r*c-a*u)*(f*p-h*v)+(e*c-a*i)*(f*M-s*v)},multiply:function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],v=n[10],M=n[11],p=n[12],m=n[13],d=n[14],g=n[15],y=r[0],A=r[1],w=r[2],R=r[3];return t[0]=y*e+A*i+w*h+R*p,t[1]=y*a+A*c+w*l+R*m,t[2]=y*o+A*f+w*v+R*d,t[3]=y*u+A*s+w*M+R*g,y=r[4],A=r[5],w=r[6],R=r[7],t[4]=y*e+A*i+w*h+R*p,t[5]=y*a+A*c+w*l+R*m,t[6]=y*o+A*f+w*v+R*d,t[7]=y*u+A*s+w*M+R*g,y=r[8],A=r[9],w=r[10],R=r[11],t[8]=y*e+A*i+w*h+R*p,t[9]=y*a+A*c+w*l+R*m,t[10]=y*o+A*f+w*v+R*d,t[11]=y*u+A*s+w*M+R*g,y=r[12],A=r[13],w=r[14],R=r[15],t[12]=y*e+A*i+w*h+R*p,t[13]=y*a+A*c+w*l+R*m,t[14]=y*o+A*f+w*v+R*d,t[15]=y*u+A*s+w*M+R*g,t}};a.mul=a.multiply,a.translate=function(t,n,r){var e,a,o,u,i,c,f,s,h,l,v,M,p=r[0],m=r[1],d=r[2];return n===t?(t[12]=n[0]*p+n[4]*m+n[8]*d+n[12],t[13]=n[1]*p+n[5]*m+n[9]*d+n[13],t[14]=n[2]*p+n[6]*m+n[10]*d+n[14],t[15]=n[3]*p+n[7]*m+n[11]*d+n[15]):(e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],v=n[10],M=n[11],t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=h,t[9]=l,t[10]=v,t[11]=M,t[12]=e*p+i*m+h*d+n[12],t[13]=a*p+c*m+l*d+n[13],t[14]=o*p+f*m+v*d+n[14],t[15]=u*p+s*m+M*d+n[15]),t},a.scale=function(t,n,r){var e=r[0],a=r[1],o=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=n[11]*o,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},a.rotate=function(t,n,r,a){var o,u,i,c,f,s,h,l,v,M,p,m,d,g,y,A,w,R,b,q,P,x,E,Y,T=a[0],S=a[1],D=a[2],O=Math.sqrt(T*T+S*S+D*D);return Math.abs(O)<e.EPSILON?null:(T*=O=1/O,S*=O,D*=O,o=Math.sin(r),i=1-(u=Math.cos(r)),c=n[0],f=n[1],s=n[2],h=n[3],l=n[4],v=n[5],M=n[6],p=n[7],m=n[8],d=n[9],g=n[10],y=n[11],A=T*T*i+u,w=S*T*i+D*o,R=D*T*i-S*o,b=T*S*i-D*o,q=S*S*i+u,P=D*S*i+T*o,x=T*D*i+S*o,E=S*D*i-T*o,Y=D*D*i+u,t[0]=c*A+l*w+m*R,t[1]=f*A+v*w+d*R,t[2]=s*A+M*w+g*R,t[3]=h*A+p*w+y*R,t[4]=c*b+l*q+m*P,t[5]=f*b+v*q+d*P,t[6]=s*b+M*q+g*P,t[7]=h*b+p*q+y*P,t[8]=c*x+l*E+m*Y,t[9]=f*x+v*E+d*Y,t[10]=s*x+M*E+g*Y,t[11]=h*x+p*E+y*Y,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},a.rotateX=function(t,n,r){var e=Math.sin(r),a=Math.cos(r),o=n[4],u=n[5],i=n[6],c=n[7],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=o*a+f*e,t[5]=u*a+s*e,t[6]=i*a+h*e,t[7]=c*a+l*e,t[8]=f*a-o*e,t[9]=s*a-u*e,t[10]=h*a-i*e,t[11]=l*a-c*e,t},a.rotateY=function(t,n,r){var e=Math.sin(r),a=Math.cos(r),o=n[0],u=n[1],i=n[2],c=n[3],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*a-f*e,t[1]=u*a-s*e,t[2]=i*a-h*e,t[3]=c*a-l*e,t[8]=o*e+f*a,t[9]=u*e+s*a,t[10]=i*e+h*a,t[11]=c*e+l*a,t},a.rotateZ=function(t,n,r){var e=Math.sin(r),a=Math.cos(r),o=n[0],u=n[1],i=n[2],c=n[3],f=n[4],s=n[5],h=n[6],l=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*a+f*e,t[1]=u*a+s*e,t[2]=i*a+h*e,t[3]=c*a+l*e,t[4]=f*a-o*e,t[5]=s*a-u*e,t[6]=h*a-i*e,t[7]=l*a-c*e,t},a.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},a.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},a.fromRotation=function(t,n,r){var a,o,u,i=r[0],c=r[1],f=r[2],s=Math.sqrt(i*i+c*c+f*f);return Math.abs(s)<e.EPSILON?null:(i*=s=1/s,c*=s,f*=s,a=Math.sin(n),u=1-(o=Math.cos(n)),t[0]=i*i*u+o,t[1]=c*i*u+f*a,t[2]=f*i*u-c*a,t[3]=0,t[4]=i*c*u-f*a,t[5]=c*c*u+o,t[6]=f*c*u+i*a,t[7]=0,t[8]=i*f*u+c*a,t[9]=c*f*u-i*a,t[10]=f*f*u+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},a.fromXRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},a.fromYRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},a.fromZRotation=function(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},a.fromRotationTranslation=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=e+e,c=a+a,f=o+o,s=e*i,h=e*c,l=e*f,v=a*c,M=a*f,p=o*f,m=u*i,d=u*c,g=u*f;return t[0]=1-(v+p),t[1]=h+g,t[2]=l-d,t[3]=0,t[4]=h-g,t[5]=1-(s+p),t[6]=M+m,t[7]=0,t[8]=l+d,t[9]=M-m,t[10]=1-(s+v),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},a.fromRotationTranslationScale=function(t,n,r,e){var a=n[0],o=n[1],u=n[2],i=n[3],c=a+a,f=o+o,s=u+u,h=a*c,l=a*f,v=a*s,M=o*f,p=o*s,m=u*s,d=i*c,g=i*f,y=i*s,A=e[0],w=e[1],R=e[2];return t[0]=(1-(M+m))*A,t[1]=(l+y)*A,t[2]=(v-g)*A,t[3]=0,t[4]=(l-y)*w,t[5]=(1-(h+m))*w,t[6]=(p+d)*w,t[7]=0,t[8]=(v+g)*R,t[9]=(p-d)*R,t[10]=(1-(h+M))*R,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},a.fromRotationTranslationScaleOrigin=function(t,n,r,e,a){var o=n[0],u=n[1],i=n[2],c=n[3],f=o+o,s=u+u,h=i+i,l=o*f,v=o*s,M=o*h,p=u*s,m=u*h,d=i*h,g=c*f,y=c*s,A=c*h,w=e[0],R=e[1],b=e[2],q=a[0],P=a[1],x=a[2];return t[0]=(1-(p+d))*w,t[1]=(v+A)*w,t[2]=(M-y)*w,t[3]=0,t[4]=(v-A)*R,t[5]=(1-(l+d))*R,t[6]=(m+g)*R,t[7]=0,t[8]=(M+y)*b,t[9]=(m-g)*b,t[10]=(1-(l+p))*b,t[11]=0,t[12]=r[0]+q-(t[0]*q+t[4]*P+t[8]*x),t[13]=r[1]+P-(t[1]*q+t[5]*P+t[9]*x),t[14]=r[2]+x-(t[2]*q+t[6]*P+t[10]*x),t[15]=1,t},a.fromQuat=function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=r+r,i=e+e,c=a+a,f=r*u,s=e*u,h=e*i,l=a*u,v=a*i,M=a*c,p=o*u,m=o*i,d=o*c;return t[0]=1-h-M,t[1]=s+d,t[2]=l-m,t[3]=0,t[4]=s-d,t[5]=1-f-M,t[6]=v+p,t[7]=0,t[8]=l+m,t[9]=v-p,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},a.frustum=function(t,n,r,e,a,o,u){var i=1/(r-n),c=1/(a-e),f=1/(o-u);return t[0]=2*o*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(a+e)*c,t[10]=(u+o)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*o*2*f,t[15]=0,t},a.perspective=function(t,n,r,e,a){var o=1/Math.tan(n/2),u=1/(e-a);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+e)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*e*u,t[15]=0,t},a.perspectiveFromFieldOfView=function(t,n,r,e){var a=Math.tan(n.upDegrees*Math.PI/180),o=Math.tan(n.downDegrees*Math.PI/180),u=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(a+o);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(a-o)*f*.5,t[10]=e/(r-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*r/(r-e),t[15]=0,t},a.ortho=function(t,n,r,e,a,o,u){var i=1/(n-r),c=1/(e-a),f=1/(o-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+e)*c,t[14]=(u+o)*f,t[15]=1,t},a.lookAt=function(t,n,r,o){var u,i,c,f,s,h,l,v,M,p,m=n[0],d=n[1],g=n[2],y=o[0],A=o[1],w=o[2],R=r[0],b=r[1],q=r[2];return Math.abs(m-R)<e.EPSILON&&Math.abs(d-b)<e.EPSILON&&Math.abs(g-q)<e.EPSILON?a.identity(t):(l=m-R,v=d-b,M=g-q,u=A*(M*=p=1/Math.sqrt(l*l+v*v+M*M))-w*(v*=p),i=w*(l*=p)-y*M,c=y*v-A*l,(p=Math.sqrt(u*u+i*i+c*c))?(u*=p=1/p,i*=p,c*=p):(u=0,i=0,c=0),f=v*c-M*i,s=M*u-l*c,h=l*i-v*u,(p=Math.sqrt(f*f+s*s+h*h))?(f*=p=1/p,s*=p,h*=p):(f=0,s=0,h=0),t[0]=u,t[1]=f,t[2]=l,t[3]=0,t[4]=i,t[5]=s,t[6]=v,t[7]=0,t[8]=c,t[9]=h,t[10]=M,t[11]=0,t[12]=-(u*m+i*d+c*g),t[13]=-(f*m+s*d+h*g),t[14]=-(l*m+v*d+M*g),t[15]=1,t)},a.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},t.exports=a},function(t,n,r){var e=r(1),a=r(4),o=r(7),u=r(8),i={create:function(){var t=new e.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}};i.rotationTo=function(){var t=o.create(),n=o.fromValues(1,0,0),r=o.fromValues(0,1,0);return function(e,a,u){var c=o.dot(a,u);return-.999999>c?(o.cross(t,n,a),o.length(t)<1e-6&&o.cross(t,r,a),o.normalize(t,t),i.setAxisAngle(e,t,Math.PI),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(o.cross(t,a,u),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1+c,i.normalize(e,e))}}(),i.setAxes=function(){var t=a.create();return function(n,r,e,a){return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=a[0],t[4]=a[1],t[7]=a[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],i.normalize(n,i.fromMat3(n,t))}}(),i.clone=u.clone,i.fromValues=u.fromValues,i.copy=u.copy,i.set=u.set,i.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},i.setAxisAngle=function(t,n,r){r*=.5;var e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t},i.add=u.add,i.multiply=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=r[0],c=r[1],f=r[2],s=r[3];return t[0]=e*s+u*i+a*f-o*c,t[1]=a*s+u*c+o*i-e*f,t[2]=o*s+u*f+e*c-a*i,t[3]=u*s-e*i-a*c-o*f,t},i.mul=i.multiply,i.scale=u.scale,i.rotateX=function(t,n,r){r*=.5;var e=n[0],a=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=e*c+u*i,t[1]=a*c+o*i,t[2]=o*c-a*i,t[3]=u*c-e*i,t},i.rotateY=function(t,n,r){r*=.5;var e=n[0],a=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=e*c-o*i,t[1]=a*c+u*i,t[2]=o*c+e*i,t[3]=u*c-a*i,t},i.rotateZ=function(t,n,r){r*=.5;var e=n[0],a=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=e*c+a*i,t[1]=a*c-e*i,t[2]=o*c+u*i,t[3]=u*c-o*i,t},i.calculateW=function(t,n){var r=n[0],e=n[1],a=n[2];return t[0]=r,t[1]=e,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-a*a)),t},i.dot=u.dot,i.lerp=u.lerp,i.slerp=function(t,n,r,e){var a,o,u,i,c,f=n[0],s=n[1],h=n[2],l=n[3],v=r[0],M=r[1],p=r[2],m=r[3];return 0>(o=f*v+s*M+h*p+l*m)&&(o=-o,v=-v,M=-M,p=-p,m=-m),1-o>1e-6?(a=Math.acos(o),u=Math.sin(a),i=Math.sin((1-e)*a)/u,c=Math.sin(e*a)/u):(i=1-e,c=e),t[0]=i*f+c*v,t[1]=i*s+c*M,t[2]=i*h+c*p,t[3]=i*l+c*m,t},i.sqlerp=function(){var t=i.create(),n=i.create();return function(r,e,a,o,u,c){return i.slerp(t,e,u,c),i.slerp(n,a,o,c),i.slerp(r,t,n,2*c*(1-c)),r}}(),i.invert=function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=r*r+e*e+a*a+o*o,i=u?1/u:0;return t[0]=-r*i,t[1]=-e*i,t[2]=-a*i,t[3]=o*i,t},i.conjugate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},i.length=u.length,i.len=i.length,i.squaredLength=u.squaredLength,i.sqrLen=i.squaredLength,i.normalize=u.normalize,i.fromMat3=function(t,n){var r,e=n[0]+n[4]+n[8];if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{var a=0;n[4]>n[0]&&(a=1),n[8]>n[3*a+a]&&(a=2);var o=(a+1)%3,u=(a+2)%3;r=Math.sqrt(n[3*a+a]-n[3*o+o]-n[3*u+u]+1),t[a]=.5*r,r=.5/r,t[3]=(n[3*o+u]-n[3*u+o])*r,t[o]=(n[3*o+a]+n[3*a+o])*r,t[u]=(n[3*u+a]+n[3*a+u])*r}return t},i.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=i},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t},clone:function(t){var n=new e.ARRAY_TYPE(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},fromValues:function(t,n,r){var a=new e.ARRAY_TYPE(3);return a[0]=t,a[1]=n,a[2]=r,a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},set:function(t,n,r,e){return t[0]=n,t[1]=r,t[2]=e,t},add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t},subtract:function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}};a.sub=a.subtract,a.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t},a.mul=a.multiply,a.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t},a.div=a.divide,a.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t},a.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t},a.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t},a.scaleAndAdd=function(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t},a.distance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return Math.sqrt(r*r+e*e+a*a)},a.dist=a.distance,a.squaredDistance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return r*r+e*e+a*a},a.sqrDist=a.squaredDistance,a.length=function(t){var n=t[0],r=t[1],e=t[2];return Math.sqrt(n*n+r*r+e*e)},a.len=a.length,a.squaredLength=function(t){var n=t[0],r=t[1],e=t[2];return n*n+r*r+e*e},a.sqrLen=a.squaredLength,a.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},a.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},a.normalize=function(t,n){var r=n[0],e=n[1],a=n[2],o=r*r+e*e+a*a;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t},a.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]},a.cross=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=r[0],i=r[1],c=r[2];return t[0]=a*c-o*i,t[1]=o*u-e*c,t[2]=e*i-a*u,t},a.lerp=function(t,n,r,e){var a=n[0],o=n[1],u=n[2];return t[0]=a+e*(r[0]-a),t[1]=o+e*(r[1]-o),t[2]=u+e*(r[2]-u),t},a.hermite=function(t,n,r,e,a,o){var u=o*o,i=u*(2*o-3)+1,c=u*(o-2)+o,f=u*(o-1),s=u*(3-2*o);return t[0]=n[0]*i+r[0]*c+e[0]*f+a[0]*s,t[1]=n[1]*i+r[1]*c+e[1]*f+a[1]*s,t[2]=n[2]*i+r[2]*c+e[2]*f+a[2]*s,t},a.bezier=function(t,n,r,e,a,o){var u=1-o,i=u*u,c=o*o,f=i*u,s=3*o*i,h=3*c*u,l=c*o;return t[0]=n[0]*f+r[0]*s+e[0]*h+a[0]*l,t[1]=n[1]*f+r[1]*s+e[1]*h+a[1]*l,t[2]=n[2]*f+r[2]*s+e[2]*h+a[2]*l,t},a.random=function(t,n){n=n||1;var r=2*e.RANDOM()*Math.PI,a=2*e.RANDOM()-1,o=Math.sqrt(1-a*a)*n;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=a*n,t},a.transformMat4=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=r[3]*e+r[7]*a+r[11]*o+r[15];return u=u||1,t[0]=(r[0]*e+r[4]*a+r[8]*o+r[12])/u,t[1]=(r[1]*e+r[5]*a+r[9]*o+r[13])/u,t[2]=(r[2]*e+r[6]*a+r[10]*o+r[14])/u,t},a.transformMat3=function(t,n,r){var e=n[0],a=n[1],o=n[2];return t[0]=e*r[0]+a*r[3]+o*r[6],t[1]=e*r[1]+a*r[4]+o*r[7],t[2]=e*r[2]+a*r[5]+o*r[8],t},a.transformQuat=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=r[0],i=r[1],c=r[2],f=r[3],s=f*e+i*o-c*a,h=f*a+c*e-u*o,l=f*o+u*a-i*e,v=-u*e-i*a-c*o;return t[0]=s*f+v*-u+h*-c-l*-i,t[1]=h*f+v*-i+l*-u-s*-c,t[2]=l*f+v*-c+s*-i-h*-u,t},a.rotateX=function(t,n,r,e){var a=[],o=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],o[0]=a[0],o[1]=a[1]*Math.cos(e)-a[2]*Math.sin(e),o[2]=a[1]*Math.sin(e)+a[2]*Math.cos(e),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},a.rotateY=function(t,n,r,e){var a=[],o=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],o[0]=a[2]*Math.sin(e)+a[0]*Math.cos(e),o[1]=a[1],o[2]=a[2]*Math.cos(e)-a[0]*Math.sin(e),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},a.rotateZ=function(t,n,r,e){var a=[],o=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],o[0]=a[0]*Math.cos(e)-a[1]*Math.sin(e),o[1]=a[0]*Math.sin(e)+a[1]*Math.cos(e),o[2]=a[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},a.forEach=function(){var t=a.create();return function(n,r,e,a,o,u){var i,c;for(r||(r=3),e||(e=0),c=a?Math.min(a*r+e,n.length):n.length,i=e;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],o(t,t,u),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}(),a.angle=function(t,n){var r=a.fromValues(t[0],t[1],t[2]),e=a.fromValues(n[0],n[1],n[2]);a.normalize(r,r),a.normalize(e,e);var o=a.dot(r,e);return o>1?0:Math.acos(o)},a.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},t.exports=a},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},clone:function(t){var n=new e.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},fromValues:function(t,n,r,a){var o=new e.ARRAY_TYPE(4);return o[0]=t,o[1]=n,o[2]=r,o[3]=a,o},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},set:function(t,n,r,e,a){return t[0]=n,t[1]=r,t[2]=e,t[3]=a,t},add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},subtract:function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}};a.sub=a.subtract,a.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t},a.mul=a.multiply,a.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t},a.div=a.divide,a.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},a.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},a.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},a.scaleAndAdd=function(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t[3]=n[3]+r[3]*e,t},a.distance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2],o=n[3]-t[3];return Math.sqrt(r*r+e*e+a*a+o*o)},a.dist=a.distance,a.squaredDistance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2],o=n[3]-t[3];return r*r+e*e+a*a+o*o},a.sqrDist=a.squaredDistance,a.length=function(t){var n=t[0],r=t[1],e=t[2],a=t[3];return Math.sqrt(n*n+r*r+e*e+a*a)},a.len=a.length,a.squaredLength=function(t){var n=t[0],r=t[1],e=t[2],a=t[3];return n*n+r*r+e*e+a*a},a.sqrLen=a.squaredLength,a.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},a.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},a.normalize=function(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=r*r+e*e+a*a+o*o;return u>0&&(u=1/Math.sqrt(u),t[0]=r*u,t[1]=e*u,t[2]=a*u,t[3]=o*u),t},a.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},a.lerp=function(t,n,r,e){var a=n[0],o=n[1],u=n[2],i=n[3];return t[0]=a+e*(r[0]-a),t[1]=o+e*(r[1]-o),t[2]=u+e*(r[2]-u),t[3]=i+e*(r[3]-i),t},a.random=function(t,n){return n=n||1,t[0]=e.RANDOM(),t[1]=e.RANDOM(),t[2]=e.RANDOM(),t[3]=e.RANDOM(),a.normalize(t,t),a.scale(t,t,n),t},a.transformMat4=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3];return t[0]=r[0]*e+r[4]*a+r[8]*o+r[12]*u,t[1]=r[1]*e+r[5]*a+r[9]*o+r[13]*u,t[2]=r[2]*e+r[6]*a+r[10]*o+r[14]*u,t[3]=r[3]*e+r[7]*a+r[11]*o+r[15]*u,t},a.transformQuat=function(t,n,r){var e=n[0],a=n[1],o=n[2],u=r[0],i=r[1],c=r[2],f=r[3],s=f*e+i*o-c*a,h=f*a+c*e-u*o,l=f*o+u*a-i*e,v=-u*e-i*a-c*o;return t[0]=s*f+v*-u+h*-c-l*-i,t[1]=h*f+v*-i+l*-u-s*-c,t[2]=l*f+v*-c+s*-i-h*-u,t[3]=n[3],t},a.forEach=function(){var t=a.create();return function(n,r,e,a,o,u){var i,c;for(r||(r=4),e||(e=0),c=a?Math.min(a*r+e,n.length):n.length,i=e;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],o(t,t,u),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),a.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=a},function(t,n,r){var e=r(1),a={create:function(){var t=new e.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},clone:function(t){var n=new e.ARRAY_TYPE(2);return n[0]=t[0],n[1]=t[1],n},fromValues:function(t,n){var r=new e.ARRAY_TYPE(2);return r[0]=t,r[1]=n,r},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t},set:function(t,n,r){return t[0]=n,t[1]=r,t},add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t},subtract:function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}};a.sub=a.subtract,a.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t},a.mul=a.multiply,a.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t},a.div=a.divide,a.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t},a.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t},a.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t},a.scaleAndAdd=function(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t},a.distance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1];return Math.sqrt(r*r+e*e)},a.dist=a.distance,a.squaredDistance=function(t,n){var r=n[0]-t[0],e=n[1]-t[1];return r*r+e*e},a.sqrDist=a.squaredDistance,a.length=function(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)},a.len=a.length,a.squaredLength=function(t){var n=t[0],r=t[1];return n*n+r*r},a.sqrLen=a.squaredLength,a.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t},a.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},a.normalize=function(t,n){var r=n[0],e=n[1],a=r*r+e*e;return a>0&&(a=1/Math.sqrt(a),t[0]=n[0]*a,t[1]=n[1]*a),t},a.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]},a.cross=function(t,n,r){var e=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=e,t},a.lerp=function(t,n,r,e){var a=n[0],o=n[1];return t[0]=a+e*(r[0]-a),t[1]=o+e*(r[1]-o),t},a.random=function(t,n){n=n||1;var r=2*e.RANDOM()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},a.transformMat2=function(t,n,r){var e=n[0],a=n[1];return t[0]=r[0]*e+r[2]*a,t[1]=r[1]*e+r[3]*a,t},a.transformMat2d=function(t,n,r){var e=n[0],a=n[1];return t[0]=r[0]*e+r[2]*a+r[4],t[1]=r[1]*e+r[3]*a+r[5],t},a.transformMat3=function(t,n,r){var e=n[0],a=n[1];return t[0]=r[0]*e+r[3]*a+r[6],t[1]=r[1]*e+r[4]*a+r[7],t},a.transformMat4=function(t,n,r){var e=n[0],a=n[1];return t[0]=r[0]*e+r[4]*a+r[12],t[1]=r[1]*e+r[5]*a+r[13],t},a.forEach=function(){var t=a.create();return function(n,r,e,a,o,u){var i,c;for(r||(r=2),e||(e=0),c=a?Math.min(a*r+e,n.length):n.length,i=e;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],o(t,t,u),n[i]=t[0],n[i+1]=t[1];return n}}(),a.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},t.exports=a}])}),function(){"use strict";var t;Math.DEG=180/Math.PI,Math.RAD=Math.PI/180,Math.TAU=2*Math.PI,Math.PHI=.5+.5*Math.sqrt(5),t=function(t,n,r){return function(e,a){var o,u,i;return o=e[0],u=e[1],i=e[2],e[0]+=a*(t*(u-o)),e[1]+=a*(o*(n-i)-u),e[2]+=a*(o*u-r*i)}},this.addEventListener("load",function(){var n,r,e,a,o,u,i,c,f,s,h;return e=t(10,28,8/3),n=document.getElementById("canvas"),r=n.getContext("2d"),document.body.appendChild(n),a=mat4.create(),h=mat4.create(),i=mat4.create(),o=mat4.create(),s=vec4.fromValues(1,0,0,1),f=vec4.create(),u=vec4.create(),(c=function(){var t,l,v,M,p,m,d,g,y,A,w,R,b;for(requestAnimationFrame(c),M=.001*Date.now(),p=n.clientWidth,t=n.clientHeight,p===n.width&&t===n.height||(n.width=p,n.height=t,r.globalCompositeOperation="lighter",r.strokeStyle="rgb(64,32,128)"),mat4.identity(a),mat4.rotateY(a,a,.05*M),mat4.rotateX(a,a,1.89*Math.PI),mat4.rotateZ(a,a,1.66*Math.PI),mat4.translate(a,a,[0,0,-27]),mat4.lookAt(h,[0,3,25],[0,-2,0],[0,1,0]),mat4.perspective(i,45*Math.RAD,p/t,.001,1e3),mat4.scale(i,i,[v=p/2,l=t/2,1]),[a,h,i].reduce(function(t,n){return mat4.mul(o,n,t)}),r.setTransform(1,0,0,-1,v,l),m=d=0;d<15e3;m=++d)50===m&&vec3.copy(f,s),e(s,.005),vec4.transformMat4(u,s,o),vec3.scale(u,u,1/u[3]),w=u[0],R=u[1],-1<(b=u[2])&&b<1&&-l<R&&R<l&&-v<w&&w<v?(A&&(A=!1,r.moveTo(g,y)),r.lineTo(w,R)):(A||(A=!0,r.lineTo(w,R)),g=w,y=R);return vec3.copy(s,f),r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,p,t),r.stroke(),r.beginPath()})()})}.call(this),function t(n,r){var e=n;if(console.log("inject start!",n),n["config-hook-debugger"]){function a(t){return function(){return arguments.length?(arguments[arguments.length-1]=arguments[arguments.length-1].replace(/debugger/g,""),t.apply(this,arguments)):t.apply(this,arguments)}}var o=r.Function.prototype.constructor;r.Function.prototype.constructor=a(o),r.Function.prototype.constructor.toString=o.toString.bind(o);var u=Function;r.Function=a(u),r.Function.toString=u.toString.bind(u);var i=eval;r.eval=a(i),r.eval.toString=i.toString.bind(i);var c=Object.getPrototypeOf(function*(){}).constructor,f=a(c);f.toString=c.toString.bind(c),Object.defineProperty(c.prototype,"constructor",{value:f,writable:!1,configurable:!0});var s=Object.getPrototypeOf(async function(){}).constructor,h=a(s);h.toString=s.toString.bind(s),Object.defineProperty(s.prototype,"constructor",{value:h,writable:!1,configurable:!0});var l=r.Element.prototype.setAttribute;r.Element.prototype.setAttribute=function(t,n){"string"==typeof n&&(n=n.replace(/debugger/g,"")),l.call(this,t,n)};var v=Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype,"contentWindow").get;Object.defineProperty(r.HTMLIFrameElement.prototype,"contentWindow",{get(){var n=v.call(this);return n.inject||(n.inject=!0,t.call(n,e,n)),n}})}if(n["config-hook-pushState"]){var M=history.pushState,p={};history.pushState=function(){if(new Date-p.lastTime>200&&(p.count=0),p.count++,!(p.count>3))return M.apply(this,arguments)},history.pushState.toString=M.toString.bind(M)}if(n["config-hook-regExp"]){var m=RegExp;RegExp=new Proxy(RegExp,{apply:(t,n,r)=>"\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}"==r[0]?Reflect.apply(t,n,[""]):Reflect.apply(t,n,r)}),RegExp.toString=m.toString.bind(m)}if(n["config-hook-console"])["debug","error","info","log","warn","dir","dirxml","table","trace","group","groupCollapsed","groupEnd","clear","count","countReset","assert","profile","profileEnd","time","timeLog","timeEnd","timeStamp","context","memory"].map(t=>{var n=console[t];return console[t]=function(){},console[t].toString=n.toString.bind(n),n})}({"config-hook-console":!1,"config-hook-debugger":!1,"config-hook-pushState":!1,"config-hook-regExp":!1},window);