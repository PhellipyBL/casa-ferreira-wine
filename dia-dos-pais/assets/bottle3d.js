(()=>{var Vc=0,bo=1,kc=2;var Es=1,Wc=2,Ni=3,bn=0,Ae=1,dn=2,fn=0,ni=1,Ms=2,To=3,Ao=4,Hc=5;var Qn=100,Xc=101,qc=102,Zc=103,Jc=104,Yc=200,jc=201,Kc=202,$c=203,hr=204,ur=205,tl=206,el=207,nl=208,il=209,sl=210,rl=211,al=212,ol=213,cl=214,dr=0,fr=1,pr=2,ii=3,mr=4,gr=5,_r=6,xr=7,Wr=0,ll=1,hl=2,je=0,wo=1,Co=2,Ro=3,Ss=4,Po=5,Fo=6,Io=7;var Uo=300,Wn=301,ai=302,Hr=303,Xr=304,bs=306,vr=1e3,rn=1001,yr=1002,ye=1003,ul=1004;var Ts=1005;var Te=1006,qr=1007;var Hn=1008;var De=1009,Lo=1010,No=1011,Oi=1012,Zr=1013,Ke=1014,He=1015,pn=1016,Jr=1017,Yr=1018,Di=1020,Oo=35902,Do=35899,Qo=1021,zo=1022,Xe=1023,an=1026,Xn=1027,jr=1028,Kr=1029,qn=1030,$r=1031;var ta=1033,As=33776,ws=33777,Cs=33778,Rs=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,ca=37488,la=37489,Ps=37490,ha=37491,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,ya=37817,Ea=37818,Ma=37819,Sa=37820,ba=37821,Ta=36492,Aa=36494,wa=36495,Ca=36283,Ra=36284,Fs=36285,Pa=36286;var Yi=2300,Er=2301,cr=2302,fo=2303,po=2400,mo=2401,go=2402;var dl=3200;var Is=0,fl=1,wn="",Pe="srgb",ji="srgb-linear",Ki="linear",qt="srgb";var ti=7680;var _o=519,pl=512,ml=513,gl=514,Fa=515,_l=516,xl=517,Ia=518,vl=519,xo=35044;var Go="300 es",Ye=2e3,Ai=2001;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yl(){let i=wi("canvas");return i.style.display="block",i}var _c={},Ci=null;function Bo(...i){let t="THREE."+i.shift();Ci?Ci("log",t,...i):console.log(t,...i)}function El(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=El(i);let t="THREE."+i.shift();if(Ci)Ci("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=El(i);let t="THREE."+i.shift();if(Ci)Ci("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ei(...i){let t=i.join(" ");t in _c||(_c[t]=!0,Rt(...i))}function Ml(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Sl={[dr]:fr,[pr]:_r,[mr]:xr,[ii]:gr,[fr]:dr,[_r]:pr,[xr]:mr,[gr]:ii},on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Va=Math.PI/180,Mr=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function fh(i,t){return(i%t+t)%t}function ka(i,t,e){return(1-e)*i+e*t}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ft=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],E=r[a+3];if(d!==E||l!==h||c!==p||u!==x){let g=l*h+c*p+u*x+d*E;g<0&&(h=-h,p=-p,x=-x,E=-E,g=-g);let f=1-o;if(g<.9995){let T=Math.acos(g),C=Math.sin(T);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C,l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+E*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+E*o;let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*p-c*h,t[e+1]=l*x+u*h+c*d-o*p,t[e+2]=c*x+u*p+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new D,xc=new cn,Ut=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],E=s[0],g=s[3],f=s[6],T=s[1],C=s[4],y=s[7],A=s[2],M=s[5],w=s[8];return r[0]=a*E+o*T+l*A,r[3]=a*g+o*C+l*M,r[6]=a*f+o*y+l*w,r[1]=c*E+u*T+d*A,r[4]=c*g+u*C+d*M,r[7]=c*f+u*y+d*w,r[2]=h*E+p*T+x*A,r[5]=h*g+p*C+x*M,r[8]=h*f+p*y+x*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=e*d+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/x;return t[0]=d*E,t[1]=(s*c-u*n)*E,t[2]=(o*n-s*a)*E,t[3]=h*E,t[4]=(u*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=p*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Ut,vc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){let i={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ji]:{primaries:t,whitePoint:n,transfer:Ki,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:qt,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var Bt=ph();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ui,Sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=wi("canvas")),ui.width=t.width,ui.height=t.height;let s=ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mh=0,Ri=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xa(s[a].image)):r.push(Xa(s[a]))}else r=Xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var gh=0,qa=new D,Ue=class i extends on{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rn,s=rn,r=Te,a=Hn,o=Xe,l=De,c=i.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Us(),this.name="",this.source=new Ri(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Uo;Ue.DEFAULT_ANISOTROPY=1;var re=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+E)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(p+1)/2,A=(f+1)/2,M=(u+h)/4,w=(d+E)/4,_=(x+g)/4;return C>y&&C>A?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=M/n,r=w/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=_/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-x)*(g-x)+(d-E)*(d-E)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(d-E)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends on{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ue(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ri(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends br{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$i=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,p,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,p,x,E,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,p,x,E,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*d,x=o*u,E=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=h-E*c,e[9]=-o*l,e[2]=E-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,x=c*u,E=c*d;e[0]=h+E*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=E+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,x=c*u,E=c*d;e[0]=h-E*o,e[4]=-a*d,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=E-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*d,x=o*u,E=o*d;e[0]=l*u,e[4]=x*c-p,e[8]=h*c+E,e[1]=l*d,e[5]=E*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,x=o*l,E=o*c;e[0]=l*u,e[4]=E-h*d,e[8]=x*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+x,e[10]=h-E*d}else if(t.order==="XZY"){let h=a*l,p=a*c,x=o*l,E=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+E,e[5]=a*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=o*u,e[10]=E*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,xh)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Fn.crossVectors(n,ze),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Fn.crossVectors(n,ze)),Fn.normalize(),zs.crossVectors(ze,Fn),s[0]=Fn.x,s[4]=zs.x,s[8]=ze.x,s[1]=Fn.y,s[5]=zs.y,s[9]=ze.y,s[2]=Fn.z,s[6]=zs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],E=n[6],g=n[10],f=n[14],T=n[3],C=n[7],y=n[11],A=n[15],M=s[0],w=s[4],_=s[8],b=s[12],F=s[1],R=s[5],O=s[9],q=s[13],Z=s[2],U=s[6],H=s[10],V=s[14],j=s[3],tt=s[7],rt=s[11],at=s[15];return r[0]=a*M+o*F+l*Z+c*j,r[4]=a*w+o*R+l*U+c*tt,r[8]=a*_+o*O+l*H+c*rt,r[12]=a*b+o*q+l*V+c*at,r[1]=u*M+d*F+h*Z+p*j,r[5]=u*w+d*R+h*U+p*tt,r[9]=u*_+d*O+h*H+p*rt,r[13]=u*b+d*q+h*V+p*at,r[2]=x*M+E*F+g*Z+f*j,r[6]=x*w+E*R+g*U+f*tt,r[10]=x*_+E*O+g*H+f*rt,r[14]=x*b+E*q+g*V+f*at,r[3]=T*M+C*F+y*Z+A*j,r[7]=T*w+C*R+y*U+A*tt,r[11]=T*_+C*O+y*H+A*rt,r[15]=T*b+C*q+y*V+A*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],E=t[7],g=t[11],f=t[15],T=l*p-c*h,C=o*p-c*d,y=o*h-l*d,A=a*p-c*u,M=a*h-l*u,w=a*d-o*u;return e*(E*T-g*C+f*y)-n*(x*T-g*A+f*M)+s*(x*C-E*A+f*w)-r*(x*y-E*M+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],E=t[13],g=t[14],f=t[15],T=e*o-n*a,C=e*l-s*a,y=e*c-r*a,A=n*l-s*o,M=n*c-r*o,w=s*c-r*l,_=u*E-d*x,b=u*g-h*x,F=u*f-p*x,R=d*g-h*E,O=d*f-p*E,q=h*f-p*g,Z=T*q-C*O+y*R+A*F-M*b+w*_;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Z;return t[0]=(o*q-l*O+c*R)*U,t[1]=(s*O-n*q-r*R)*U,t[2]=(E*w-g*M+f*A)*U,t[3]=(h*M-d*w-p*A)*U,t[4]=(l*F-a*q-c*b)*U,t[5]=(e*q-s*F+r*b)*U,t[6]=(g*y-x*w-f*C)*U,t[7]=(u*w-h*y+p*C)*U,t[8]=(a*O-o*F+c*_)*U,t[9]=(n*F-e*O-r*_)*U,t[10]=(x*M-E*y+f*T)*U,t[11]=(d*y-u*M-p*T)*U,t[12]=(o*b-a*R-l*_)*U,t[13]=(e*R-n*b+s*_)*U,t[14]=(E*C-x*A-g*T)*U,t[15]=(u*A-d*C+h*T)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,x=r*d,E=a*u,g=a*d,f=o*d,T=l*c,C=l*u,y=l*d,A=n.x,M=n.y,w=n.z;return s[0]=(1-(E+f))*A,s[1]=(p+y)*A,s[2]=(x-C)*A,s[3]=0,s[4]=(p-y)*M,s[5]=(1-(h+f))*M,s[6]=(g+T)*M,s[7]=0,s[8]=(x+C)*w,s[9]=(g-T)*w,s[10]=(1-(h+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=di.set(s[0],s[1],s[2]).length(),o=di.set(s[4],s[5],s[6]).length(),l=di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qe.copy(this);let c=1/a,u=1/o,d=1/l;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ye,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),x,E;if(l)x=r/(a-r),E=a*r/(a-r);else if(o===Ye)x=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Ai)x=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ye,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),x,E;if(l)x=1/(a-r),E=a/(a-r);else if(o===Ye)x=-2/(a-r),E=-(a+r)/(a-r);else if(o===Ai)x=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new D,qe=new Kt,_h=new D(0,0,0),xh=new D(1,1,1),Fn=new D,zs=new D,ze=new D,Ec=new Kt,Mc=new cn,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vh=0,Sc=new D,fi=new cn,_n=new Kt,Gs=new D,Wi=new D,yh=new D,Eh=new cn,bc=new D(1,0,0),Tc=new D(0,1,0),Ac=new D(0,0,1),wc={type:"added"},Mh={type:"removed"},pi={type:"childadded",child:null},Za={type:"childremoved",child:null},Ee=class i extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ln,n=new cn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Wi,Gs,this.up):_n.lookAt(Gs,Wi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(_n),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),pi.child=t,this.dispatchEvent(pi),pi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sh={type:"move"},Pi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let g=e.getJointPose(E,n),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Bt.workingColorSpace){if(t=fh(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ja(a,r,t+1/3),this.g=Ja(a,r,t),this.b=Ja(a,r,t-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Bt.workingToColorSpace(Re.copy(this),t),Math.round(Gt(Re.r*255,0,255))*65536+Math.round(Gt(Re.g*255,0,255))*256+Math.round(Gt(Re.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.workingToColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Bt.workingColorSpace){return Bt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Pe){Bt.workingToColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Bs);let n=ka(In.h,Bs.h,e),s=ka(In.s,Bs.s,e),r=ka(In.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new It;It.NAMES=bl;var si=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ze=new D,xn=new D,Ya=new D,vn=new D,mi=new D,gi=new D,Cc=new D,ja=new D,Ka=new D,$a=new D,to=new re,eo=new re,no=new re,Dn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),xn.subVectors(n,e),Ya.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(xn),l=Ze.dot(Ya),c=xn.dot(xn),u=xn.dot(Ya),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),xn.subVectors(t,e),Ze.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Ze.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mi.subVectors(s,n),gi.subVectors(r,n),ja.subVectors(t,n);let l=mi.dot(ja),c=gi.dot(ja);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,s);let u=mi.dot(Ka),d=gi.dot(Ka);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(mi,a);$a.subVectors(t,r);let p=mi.dot($a),x=gi.dot($a);if(x>=0&&p<=x)return e.copy(r);let E=p*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(gi,o);let g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return Cc.subVectors(r,s),o=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(Cc,o);let f=1/(g+E+h);return a=E*f,o=h*f,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),ks.subVectors(this.max,Hi),_i.subVectors(t.a,Hi),xi.subVectors(t.b,Hi),vi.subVectors(t.c,Hi),Un.subVectors(xi,_i),Ln.subVectors(vi,xi),Yn.subVectors(_i,vi);let e=[0,-Un.z,Un.y,0,-Ln.z,Ln.y,0,-Yn.z,Yn.y,Un.z,0,-Un.x,Ln.z,0,-Ln.x,Yn.z,0,-Yn.x,-Un.y,Un.x,0,-Ln.y,Ln.x,0,-Yn.y,Yn.x,0];return!io(e,_i,xi,vi,ks)||(e=[1,0,0,0,1,0,0,0,1],!io(e,_i,xi,vi,ks))?!1:(Ws.crossVectors(Un,Ln),e=[Ws.x,Ws.y,Ws.z],io(e,_i,xi,vi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yn=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,Vs=new hn,_i=new D,xi=new D,vi=new D,Un=new D,Ln=new D,Yn=new D,Hi=new D,ks=new D,Ws=new D,jn=new D;function io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var fe=new D,Hs=new Ft,bh=0,be=class extends on{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=He,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xo&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var es=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ns=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Th=new hn,Xi=new D,so=new D,Tn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Th.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(so)),this.expandByPoint(Xi.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ah=0,We=new Kt,ro=new Ee,yi=new D,Ge=new hn,qi=new hn,xe=new D,Le=class i extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?ns:es)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ge.min,qi.min),Ge.expandByPoint(xe),xe.addVectors(Ge.max,qi.max),Ge.expandByPoint(xe)):(Ge.expandByPoint(qi.min),Ge.expandByPoint(qi.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xe.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),xe.add(yi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;let c=new D,u=new D,d=new D,h=new Ft,p=new Ft,x=new Ft,E=new D,g=new D;function f(_,b,F){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,F),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,F),u.sub(c),d.sub(c),p.sub(h),x.sub(h);let R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(R),o[_].add(E),o[b].add(E),o[F].add(E),l[_].add(g),l[b].add(g),l[F].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,b=T.length;_<b;++_){let F=T[_],R=F.start,O=F.count;for(let q=R,Z=R+O;q<Z;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let C=new D,y=new D,A=new D,M=new D;function w(_){A.fromBufferAttribute(s,_),M.copy(A);let b=o[_];C.copy(b),C.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(M,b);let R=y.dot(l[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,R)}for(let _=0,b=T.length;_<b;++_){let F=T[_],R=F.start,O=F.count;for(let q=R,Z=R+O;q<Z;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(t)for(let h=0,p=t.count;h<p;h+=3){let x=t.getX(h+0),E=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new be(h,u,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wh=0,un=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ni,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=ur,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var En=new D,ao=new D,Xs=new D,Nn=new D,oo=new D,qs=new D,co=new D,is=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=Nn.dot(this.direction),l=-Nn.dot(Xs),c=Nn.lengthSq(),u=Math.abs(1-a*a),d,h,p,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let E=1/u;d*=E,h*=E,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ao).addScaledVector(Xs,h),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),qs.subVectors(n,t),co.crossVectors(oo,qs);let a=this.direction.dot(co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);let l=o*this.direction.dot(qs.crossVectors(Nn,qs));if(l<0)return null;let c=o*this.direction.dot(oo.cross(Nn));if(c<0||l+c>a)return null;let u=-o*Nn.dot(co);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ss=class extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rc=new Kt,Kn=new is,Zs=new Tn,Pc=new D,Js=new D,Ys=new D,js=new D,lo=new D,Ks=new D,Fc=new D,$s=new D,ee=class extends Ee{constructor(t=new Le,e=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(lo.fromBufferAttribute(d,t),a?Ks.addScaledVector(lo,u):Ks.addScaledVector(lo.sub(e),u))}e.add(Ks)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Zs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Zs,Pc)===null||Kn.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){let g=h[x],f=a[g.materialIndex],T=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=C;y<A;y+=3){let M=o.getX(y),w=o.getX(y+1),_=o.getX(y+2);s=tr(this,f,t,n,c,u,d,M,w,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=x,f=E;g<f;g+=3){let T=o.getX(g),C=o.getX(g+1),y=o.getX(g+2);s=tr(this,a,t,n,c,u,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){let g=h[x],f=a[g.materialIndex],T=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=C;y<A;y+=3){let M=y,w=y+1,_=y+2;s=tr(this,f,t,n,c,u,d,M,w,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=x,f=E;g<f;g+=3){let T=g,C=g+1,y=g+2;s=tr(this,a,t,n,c,u,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ch(i,t,e,n,s,r,a,o){let l;if(t.side===Ae?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function tr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,Ys),i.getVertexPosition(c,js);let u=Ch(i,t,e,n,Js,Ys,js,Fc);if(u){let d=new D;Dn.getBarycoord(Fc,Js,Ys,js,d),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,l,c,d,new Ft)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,l,c,d,new Ft)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Dn.getNormal(Js,Ys,js,h.normal),u.face=h,u.barycoord=d}return u}var rs=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ye,u=ye,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ei=new Kt,Ic=new Kt,er=[],Uc=new hn,Rh=new Kt,Zi=new ee,Ji=new Tn,os=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rh)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),Uc.copy(t.boundingBox).applyMatrix4(Ei),this.boundingBox.union(Uc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),Ji.copy(t.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),t.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ei),Ic.multiplyMatrices(n,Ei),Zi.matrixWorld=Ic,Zi.raycast(t,er);for(let a=0,o=er.length;a<o;a++){let l=er[a];l.instanceId=r,l.object=this,e.push(l)}er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rs(new Float32Array(s*this.count),s,this.count,jr,He));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ho=new D,Ph=new D,Fh=new Ut,sn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ho.subVectors(n,e).cross(Ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fh.getNormalMatrix(t),s=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new Tn,Ih=new Ft(.5,.5),nr=new D,Fi=class{constructor(t=new sn,e=new sn,n=new sn,s=new sn,r=new sn,a=new sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ye,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],E=r[9],g=r[10],f=r[11],T=r[12],C=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,f-x,A-T).normalize(),s[1].setComponents(c+a,p+u,f+x,A+T).normalize(),s[2].setComponents(c+o,p+d,f+E,A+C).normalize(),s[3].setComponents(c-o,p-d,f-E,A-C).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,p-h,f-g,A-y).normalize();else if(s[4].setComponents(c-l,p-h,f-g,A-y).normalize(),e===Ye)s[5].setComponents(c+l,p+h,f+g,A+y).normalize();else if(e===Ai)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=Ih.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lc=new Kt,vo=new is,ir=new Tn,sr=new D,cs=class extends Ee{constructor(t=new Le,e=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;Lc.copy(s).invert(),vo.copy(t.ray).applyMatrix4(Lc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,E=p;x<E;x++){let g=c.getX(x);sr.fromBufferAttribute(d,g),Nc(sr,g,l,s,t,e,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=h,E=p;x<E;x++)sr.fromBufferAttribute(d,x),Nc(sr,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nc(i,t,e,n,s,r,a){let o=vo.distanceSqToPoint(i);if(o<e){let l=new D;vo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ls=class extends Ue{constructor(t=[],e=Wn,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var An=class extends Ue{constructor(t,e,n=Ke,s,r,a,o=ye,l=ye,c,u=an,d=1){if(u!==an&&u!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ri(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wr=class extends An{constructor(t,e=Ke,n=Wn,s,r,a=ye,o=ye,l,c=an){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hs=class extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zn=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function x(E,g,f,T,C,y,A,M,w,_,b){let F=y/w,R=A/_,O=y/2,q=A/2,Z=M/2,U=w+1,H=_+1,V=0,j=0,tt=new D;for(let rt=0;rt<H;rt++){let at=rt*R-q;for(let _t=0;_t<U;_t++){let Wt=_t*F-O;tt[E]=Wt*T,tt[g]=at*C,tt[f]=Z,c.push(tt.x,tt.y,tt.z),tt[E]=0,tt[g]=0,tt[f]=M>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(_t/w),d.push(1-rt/_),V+=1}}for(let rt=0;rt<_;rt++)for(let at=0;at<w;at++){let _t=h+at+U*rt,Wt=h+at+U*(rt+1),ne=h+(at+1)+U*(rt+1),pt=h+(at+1)+U*rt;l.push(_t,Wt,pt),l.push(Wt,ne,pt),j+=6}o.addGroup(p,j,b),p+=j,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var us=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,u=new Ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var ds=class i extends Le{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Gt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new D,h=new Ft,p=new D,x=new D,E=new D,g=0,f=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:g=t[T+1].x-t[T].x,f=t[T+1].y-t[T].y,p.x=f*1,p.y=-g,p.z=f*0,E.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:g=t[T+1].x-t[T].x,f=t[T+1].y-t[T].y,p.x=f*1,p.y=-g,p.z=f*0,x.copy(p),p.x+=E.x,p.y+=E.y,p.z+=E.z,p.normalize(),l.push(p.x,p.y,p.z),E.copy(x)}for(let T=0;T<=e;T++){let C=n+T*u*s,y=Math.sin(C),A=Math.cos(C);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*y,d.y=t[M].y,d.z=t[M].x*A,a.push(d.x,d.y,d.z),h.x=T/e,h.y=M/(t.length-1),o.push(h.x,h.y);let w=l[3*M+0]*y,_=l[3*M+1],b=l[3*M+0]*A;c.push(w,_,b)}}for(let T=0;T<e;T++)for(let C=0;C<t.length-1;C++){let y=C+T*t.length,A=y,M=y+t.length,w=y+t.length+1,_=y+1;r.push(A,M,_),r.push(w,_,M)}this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var fs=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],x=[],E=[],g=[];for(let f=0;f<u;f++){let T=f*h-a;for(let C=0;C<c;C++){let y=C*d-r;x.push(y,-T,0),E.push(0,0,1),g.push(C/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let C=T+c*f,y=T+c*(f+1),A=T+1+c*(f+1),M=T+1+c*f;p.push(C,y,M),p.push(y,A,M)}this.setIndex(p),this.setAttribute("position",new ve(x,3)),this.setAttribute("normal",new ve(E,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Oc(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Oc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=oi(i[e]);for(let s in n)t[s]=n[s]}return t}function Oc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Tl={clone:oi,merge:Ie},Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.uniformsGroups=Uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cr=class extends Fe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ri=class extends un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Is,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ps=class extends ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ms=class extends un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Is,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Wr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rr=class extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pr=class extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Gn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mo:r=t,o=2*e-n;break;case go:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mo:a=t,l=2*n-e;break;case go:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),E=x*x,g=E*x,f=-h*g+2*h*E-h*x,T=(1+h)*g+(-1.5-2*h)*E+(-.5+h)*x+1,C=(-1-p)*g+(1.5+p)*E+.5*x,y=p*g-p*E;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+T*a[c+A]+C*a[l+A]+y*a[d+A];return r}},Ir=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Ur=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lr=class extends Gn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(n-e)/(s-e),E=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*E+a[l+g]*x;return r}let h=o*2,p=t-1;for(let x=0;x!==o;++x){let E=a[c+x],g=a[l+x],f=p*h+x*2,T=d[f],C=d[f+1],y=t*h+x*2,A=u[y],M=u[y+1],w=(n-e)/(s-e),_,b,F,R,O;for(let q=0;q<8;q++){_=w*w,b=_*w,F=1-w,R=F*F,O=R*F;let U=O*e+3*R*w*T+3*F*_*A+b*s-n;if(Math.abs(U)<1e-10)break;let H=3*R*(T-e)+6*F*w*(A-T)+3*_*(s-A);if(Math.abs(H)<1e-10)break;w=w-U/H,w=Math.max(0,Math.min(1,w))}r[x]=O*E+3*R*w*C+3*F*_*M+b*g}return r}},Ve=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rr(e,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rr(t.times,Array),values:rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ir(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Lr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yi:e=this.InterpolantFactoryMethodDiscrete;break;case Er:e=this.InterpolantFactoryMethodLinear;break;case cr:e=this.InterpolantFactoryMethodSmooth;break;case fo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return cr;case this.InterpolantFactoryMethodBezier:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&dh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,p=d+n;for(let x=0;x!==n;++x){let E=e[d+x];if(E!==e[h+x]||E!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ve.prototype.ValueTypeName="";Ve.prototype.TimeBufferType=Float32Array;Ve.prototype.ValueBufferType=Float32Array;Ve.prototype.DefaultInterpolation=Er;var Bn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=Yi;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Nr.prototype.ValueTypeName="color";var Or=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Or.prototype.ValueTypeName="number";var Dr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},gs=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Dr(this.times,this.values,this.getValueSize(),t)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Yi;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Qr.prototype.ValueTypeName="vector";var lr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Dc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Dc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Dc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var zr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Al=new zr,Ii=class{constructor(t){this.manager=t!==void 0?t:Al,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi=new WeakMap,Gr=class extends Ii{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=lr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Mi.get(a);d===void 0&&(d=[],Mi.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=wi("img");function l(){u(),e&&e(this);let d=Mi.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onLoad&&p.onLoad(this)}Mi.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),lr.remove(`image:${t}`);let h=Mi.get(this)||[];for(let p=0;p<h.length;p++){let x=h[p];x.onError&&x.onError(d)}Mi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),lr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var _s=class extends Ii{constructor(t){super(t)}load(t,e,n,s){let r=new Ue,a=new Gr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ui=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var uo=new Kt,Qc=new D,zc=new D,Br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=De,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ai||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ar=new D,or=new cn,nn=new D,xs=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ar,or,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,or,nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ar,or,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,or,nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},On=new D,Gc=new Ft,Bc=new Ft,Se=class extends xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Bc),e.subVectors(Bc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yo=class extends Br{constructor(){super(new Se(90,1,.5,500)),this.isPointLightShadow=!0}},kn=class extends Ui{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Li=class extends xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eo=class extends Br{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends Ui{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Eo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ys=class extends Ui{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Si=-90,bi=1,Vr=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Se(Si,bi,t,e);s.layers=this.layers,this.add(s);let r=new Se(Si,bi,t,e);r.layers=this.layers,this.add(r);let a=new Se(Si,bi,t,e);a.layers=this.layers,this.add(a);let o=new Se(Si,bi,t,e);o.layers=this.layers,this.add(o);let l=new Se(Si,bi,t,e);l.layers=this.layers,this.add(l);let c=new Se(Si,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ye)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ai)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},kr=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ko="\\[\\]\\.:\\/",Oh=new RegExp("["+ko+"]","g"),Wo="[^"+ko+"]",Dh="[^"+ko.replace("\\.","")+"]",Qh=/((?:WC+[\/:])*)/.source.replace("WC",Wo),zh=/(WCOD+)?/.source.replace("WCOD",Dh),Gh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Bh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),Vh=new RegExp("^"+Qh+zh+Gh+Bh+"$"),kh=["material","materials","bones","map"],Mo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Oh,"")}static parseTrackName(t){let e=Vh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Mo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qm=new Float32Array(1);var So=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Ho(i,t,e,n){let s=Wh(n);switch(e){case Qo:return i*t;case jr:return i*t/s.components*s.byteLength;case Kr:return i*t/s.components*s.byteLength;case qn:return i*t*2/s.components*s.byteLength;case $r:return i*t*2/s.components*s.byteLength;case zo:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case As:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(i,8)*Math.max(t,8)/2;case ra:case aa:case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case Ps:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fs:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wh(i){switch(i){case De:case Lo:return{byteLength:1,components:1};case Oi:case No:case pn:return{byteLength:2,components:1};case Jr:case Yr:return{byteLength:2,components:4};case Ke:case Zr:case He:return{byteLength:4,components:1};case Oo:case Do:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Jl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xh(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){let x=d[h],E=d[p];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,d[h]=E)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){let E=d[p];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,au=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:qh,alphahash_pars_fragment:Zh,alphamap_fragment:Jh,alphamap_pars_fragment:Yh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:$h,aomap_pars_fragment:tu,batching_pars_vertex:eu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:ou,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:bu,envmap_fragment:Tu,envmap_common_pars_fragment:Au,envmap_pars_fragment:wu,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:zu,envmap_vertex:Ru,fog_vertex:Pu,fog_pars_vertex:Fu,fog_fragment:Iu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Du,lights_pars_begin:Qu,lights_toon_fragment:Gu,lights_toon_pars_fragment:Bu,lights_phong_fragment:Vu,lights_phong_pars_fragment:ku,lights_physical_fragment:Wu,lights_physical_pars_fragment:Hu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Zu,lightprobes_pars_fragment:Ju,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:$u,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:cd,morphtarget_pars_vertex:ld,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:yd,opaque_fragment:Ed,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:bd,dithering_fragment:Td,dithering_pars_fragment:Ad,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Fd,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Ld,skinning_vertex:Nd,skinnormal_vertex:Od,specularmap_fragment:Dd,specularmap_pars_fragment:Qd,tonemapping_fragment:zd,tonemapping_pars_fragment:Gd,transmission_fragment:Bd,transmission_pars_fragment:Vd,uv_pars_fragment:kd,uv_pars_vertex:Wd,uv_vertex:Hd,worldpos_vertex:Xd,background_vert:qd,background_frag:Zd,backgroundCube_vert:Jd,backgroundCube_frag:Yd,cube_vert:jd,cube_frag:Kd,depth_vert:$d,depth_frag:tf,distance_vert:ef,distance_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:cf,meshbasic_frag:lf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:xf,meshphysical_frag:vf,meshtoon_vert:yf,meshtoon_frag:Ef,points_vert:Mf,points_frag:Sf,shadow_vert:bf,shadow_frag:Tf,sprite_vert:Af,sprite_frag:wf},ut={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},gn={basic:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ie([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ie([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new It(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ie([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ie([ut.points,ut.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ie([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ie([ut.common,ut.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ie([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ie([ut.sprite,ut.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Ie([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Ie([ut.lights,ut.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};gn.physical={uniforms:Ie([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Ua={r:0,b:0,g:0},Cf=new Kt,Yl=new Ut;Yl.set(-1,0,0,0,1,0,0,0,1);function Rf(i,t,e,n,s,r){let a=new It(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=t.get(C,y)}return C}function x(T){let C=!1,y=p(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),C=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(T,C){let y=p(C);y&&(y.isCubeTexture||y.mapping===bs)?(c===void 0&&(c=new ee(new zn(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:oi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yl),c.material.toneMapped=Bt.getTransfer(y.colorSpace)!==qt,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new fs(2,2),new Fe({name:"BackgroundMaterial",uniforms:oi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(y.colorSpace)!==qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,C){T.getRGB(Ua,Vo(i)),e.buffers.color.setClear(Ua.r,Ua.g,Ua.b,C,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:x,addToRenderList:E,dispose:f}}function Pf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,O,q,Z,U){let H=!1,V=d(R,Z,q,O);r!==V&&(r=V,c(r.object)),H=p(R,Z,q,U),H&&x(R,Z,q,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(R,O,q,Z),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,O,q,Z){let U=Z.wireframe===!0,H=n[O.id];H===void 0&&(H={},n[O.id]=H);let V=R.isInstancedMesh===!0?R.id:0,j=H[V];j===void 0&&(j={},H[V]=j);let tt=j[q.id];tt===void 0&&(tt={},j[q.id]=tt);let rt=tt[U];return rt===void 0&&(rt=h(l()),tt[U]=rt),rt}function h(R){let O=[],q=[],Z=[];for(let U=0;U<e;U++)O[U]=0,q[U]=0,Z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Z,object:R,attributes:{},index:null}}function p(R,O,q,Z){let U=r.attributes,H=O.attributes,V=0,j=q.getAttributes();for(let tt in j)if(j[tt].location>=0){let at=U[tt],_t=H[tt];if(_t===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;V++}return r.attributesNum!==V||r.index!==Z}function x(R,O,q,Z){let U={},H=O.attributes,V=0,j=q.getAttributes();for(let tt in j)if(j[tt].location>=0){let at=H[tt];at===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(at=R.instanceColor));let _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),U[tt]=_t,V++}r.attributes=U,r.attributesNum=V,r.index=Z}function E(){let R=r.newAttributes;for(let O=0,q=R.length;O<q;O++)R[O]=0}function g(R){f(R,0)}function f(R,O){let q=r.newAttributes,Z=r.enabledAttributes,U=r.attributeDivisors;q[R]=1,Z[R]===0&&(i.enableVertexAttribArray(R),Z[R]=1),U[R]!==O&&(i.vertexAttribDivisor(R,O),U[R]=O)}function T(){let R=r.newAttributes,O=r.enabledAttributes;for(let q=0,Z=O.length;q<Z;q++)O[q]!==R[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function C(R,O,q,Z,U,H,V){V===!0?i.vertexAttribIPointer(R,O,q,U,H):i.vertexAttribPointer(R,O,q,Z,U,H)}function y(R,O,q,Z){E();let U=Z.attributes,H=q.getAttributes(),V=O.defaultAttributeValues;for(let j in H){let tt=H[j];if(tt.location>=0){let rt=U[j];if(rt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor)),rt!==void 0){let at=rt.normalized,_t=rt.itemSize,Wt=t.get(rt);if(Wt===void 0)continue;let ne=Wt.buffer,pt=Wt.type,k=Wt.bytesPerElement,et=pt===i.INT||pt===i.UNSIGNED_INT||rt.gpuType===Zr;if(rt.isInterleavedBufferAttribute){let $=rt.data,At=$.stride,Lt=rt.offset;if($.isInstancedInterleavedBuffer){for(let wt=0;wt<tt.locationSize;wt++)f(tt.location+wt,$.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let wt=0;wt<tt.locationSize;wt++)g(tt.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let wt=0;wt<tt.locationSize;wt++)C(tt.location+wt,_t/tt.locationSize,pt,at,At*k,(Lt+_t/tt.locationSize*wt)*k,et)}else{if(rt.isInstancedBufferAttribute){for(let $=0;$<tt.locationSize;$++)f(tt.location+$,rt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let $=0;$<tt.locationSize;$++)g(tt.location+$);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let $=0;$<tt.locationSize;$++)C(tt.location+$,_t/tt.locationSize,pt,at,_t*k,_t/tt.locationSize*$*k,et)}}else if(V!==void 0){let at=V[j];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(tt.location,at);break;case 3:i.vertexAttrib3fv(tt.location,at);break;case 4:i.vertexAttrib4fv(tt.location,at);break;default:i.vertexAttrib1fv(tt.location,at)}}}}T()}function A(){b();for(let R in n){let O=n[R];for(let q in O){let Z=O[q];for(let U in Z){let H=Z[U];for(let V in H)u(H[V].object),delete H[V];delete Z[U]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let O=n[R.id];for(let q in O){let Z=O[q];for(let U in Z){let H=Z[U];for(let V in H)u(H[V].object),delete H[V];delete Z[U]}}delete n[R.id]}function w(R){for(let O in n){let q=n[O];for(let Z in q){let U=q[Z];if(U[R.id]===void 0)continue;let H=U[R.id];for(let V in H)u(H[V].object),delete H[V];delete U[R.id]}}}function _(R){for(let O in n){let q=n[O],Z=R.isInstancedMesh===!0?R.id:0,U=q[Z];if(U!==void 0){for(let H in U){let V=U[H];for(let j in V)u(V[j].object),delete V[j];delete U[H]}delete q[Z],Object.keys(q).length===0&&delete n[O]}}}function b(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:g,disableUnusedAttributes:T}}function Ff(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function If(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Xe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==De&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==He&&!_)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:A,samples:M}}function Uf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new sn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let x=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let T=r?0:n,C=T*4,y=f.clippingState||null;l.value=y,y=u(x,h,C,p);for(let A=0;A!==C;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,x){let E=d!==null?d.length:0,g=null;if(E!==0){if(g=l.value,x!==!0||g===null){let f=p+E*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let C=0,y=p;C!==E;++C,y+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}var Zn=4,wl=[.125,.215,.35,.446,.526,.582],ci=20,Lf=256,Ls=new Li,Cl=new It,Xo=null,qo=0,Zo=0,Jo=!1,Nf=new D,Gi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Nf}=r;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Zo),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wn||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:pn,format:Xe,colorSpace:ji,depthBuffer:!1},s=Rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Of(r)),this._blurMaterial=Qf(r,t,e),this._ggxMaterial=Df(r,t,e)}return s}_compileMaterial(t){let e=new ee(new Le,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,s,r){let l=new Se(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Cl),d.toneMapping=je,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new zn,new ss({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,g=E.material,f=!1,T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,f=!0):(g.color.copy(Cl),f=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let A=this._cubeSize;Qi(s,y*A,C>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(E,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wn||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ls)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:x}=this,E=this._sizeLods[n],g=3*E*(n>x-Zn?n-x+Zn:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Qi(r,g,f,3*E,2*E),s.setRenderTarget(r),s.render(o,Ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Qi(t,g,f,3*E,2*E),s.setRenderTarget(t),s.render(o,Ls)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),E=r/x,g=isFinite(r)?1+Math.floor(u*E):ci;g>ci&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ci}`);let f=[],T=0;for(let w=0;w<ci;++w){let _=w/E,b=Math.exp(-_*_/2);f.push(b),w===0?T+=b:w<g&&(T+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:C}=this;h.dTheta.value=x,h.mipInt.value=C-n;let y=this._sizeLods[s],A=3*y*(s>C-Zn?s-C+Zn:0),M=4*(this._cubeSize-y);Qi(e,A,M,3*y,2*y),l.setRenderTarget(e),l.render(d,Ls)}};function Of(i){let t=[],e=[],n=[],s=i,r=i-Zn+1+wl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Zn?l=wl[a-i+Zn-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,E=3,g=2,f=1,T=new Float32Array(E*x*p),C=new Float32Array(g*x*p),y=new Float32Array(f*x*p);for(let M=0;M<p;M++){let w=M%3*2/3-1,_=M>2?0:-1,b=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];T.set(b,E*x*M),C.set(h,g*x*M);let F=[M,M,M,M,M,M];y.set(F,f*x*M)}let A=new Le;A.setAttribute("position",new be(T,E)),A.setAttribute("uv",new be(C,g)),A.setAttribute("faceIndex",new be(y,f)),n.push(new ee(A,null)),s>Zn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Rl(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Df(i,t,e){return new Fe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Qf(i,t,e){let n=new Float32Array(ci),s=new D(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Pl(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Fl(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Na=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ls(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zn(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:fn});r.uniforms.tEquirect.value=e;let a=new ee(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Te),new Vr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function zf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Hr||p===Xr)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let E=new Na(x.height);return E.fromEquirectangularTexture(i,h),t.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===Hr||p===Xr,E=p===Wn||p===ai;if(x||E){let g=e.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Gi(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let T=h.image;return x&&T&&T.height>0||E&&T&&l(T)?(n===null&&(n=new Gi(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Hr?h.mapping=Wn:p===Xr&&(h.mapping=ai),h}function l(h){let p=0,x=6;for(let E=0;E<x;E++)h[E]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Gf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ei("WebGLRenderer: "+n+" extension not supported."),s}}}function Bf(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,x=d.attributes.position,E=0;if(x===void 0)return;if(p!==null){let T=p.array;E=p.version;for(let C=0,y=T.length;C<y;C+=3){let A=T[C+0],M=T[C+1],w=T[C+2];h.push(A,M,M,w,w,A)}}else{let T=x.array;E=x.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let A=C+0,M=C+1,w=C+2;h.push(A,M,M,w,w,A)}}let g=new(x.count>=65535?ns:es)(h,1);g.version=E;let f=r.get(d);f&&t.remove(f),r.set(d,g)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Vf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let E=0;for(let g=0;g<p;g++)E+=h[g];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wf(i,t,e){let n=new WeakMap,s=new re;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;p===!0&&(C=1),x===!0&&(C=2),E===!0&&(C=3);let y=o.attributes.position.count*C,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*A*4*d),w=new $i(M,y,A,d);w.type=He,w.needsUpdate=!0;let _=C*4;for(let F=0;F<d;F++){let R=g[F],O=f[F],q=T[F],Z=y*A*4*F;for(let U=0;U<R.count;U++){let H=U*_;p===!0&&(s.fromBufferAttribute(R,U),M[Z+H+0]=s.x,M[Z+H+1]=s.y,M[Z+H+2]=s.z,M[Z+H+3]=0),x===!0&&(s.fromBufferAttribute(O,U),M[Z+H+4]=s.x,M[Z+H+5]=s.y,M[Z+H+6]=s.z,M[Z+H+7]=0),E===!0&&(s.fromBufferAttribute(q,U),M[Z+H+8]=s.x,M[Z+H+9]=s.y,M[Z+H+10]=s.z,M[Z+H+11]=q.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Ft(y,A)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hf(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Xf={[wo]:"LINEAR_TONE_MAPPING",[Co]:"REINHARD_TONE_MAPPING",[Ro]:"CINEON_TONE_MAPPING",[Ss]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Io]:"NEUTRAL_TONE_MAPPING",[Po]:"CUSTOM_TONE_MAPPING"};function qf(i,t,e,n,s,r){let a=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new An(t,e):void 0}),o=new Be(t,e,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new Le;l.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ve([0,2,0,0,2,0],2));let c=new Cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ee(l,c),d=new Li(-1,1,1,-1,0,1),h=null,p=null,x=!1,E,g=null,f=[],T=!1;this.setSize=function(C,y){a.setSize(C,y),o.setSize(C,y);for(let A=0;A<f.length;A++){let M=f[A];M.setSize&&M.setSize(C,y)}},this.setEffects=function(C){f=C,T=f.length>0&&f[0].isRenderPass===!0;let y=a.width,A=a.height;for(let M=0;M<f.length;M++){let w=f[M];w.setSize&&w.setSize(y,A)}},this.begin=function(C,y){if(x||C.toneMapping===je&&f.length===0)return!1;if(g=y,y!==null){let A=y.width,M=y.height;(a.width!==A||a.height!==M)&&this.setSize(A,M)}return T===!1&&C.setRenderTarget(a),E=C.toneMapping,C.toneMapping=je,!0},this.hasRenderPass=function(){return T},this.end=function(C,y){C.toneMapping=E,x=!0;let A=a,M=o;for(let w=0;w<f.length;w++){let _=f[w];if(_.enabled!==!1&&(_.render(C,M,A,y),_.needsSwap!==!1)){let b=A;A=M,M=b}}if(h!==C.outputColorSpace||p!==C.toneMapping){h=C.outputColorSpace,p=C.toneMapping,c.defines={},Bt.getTransfer(h)===qt&&(c.defines.SRGB_TRANSFER="");let w=Xf[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,C.setRenderTarget(g),C.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var jl=new Ue,Ko=new An(1,1),Kl=new $i,$l=new Tr,th=new ls,Il=[],Ul=[],Ll=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function Bi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Yf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Kf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),ge(e,n)}}function $f(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),ge(e,n)}}function tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ll.set(n),i.uniformMatrix4fv(this.addr,!1,Ll),ge(e,n)}}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=e.isReversedDepthBuffer()?Ia:Fa,r=Ko):r=jl,e.setTexture2D(t||r,s)}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$l,s)}function up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kl,s)}function fp(i){switch(i){case 5126:return Zf;case 35664:return Jf;case 35665:return Yf;case 35666:return jf;case 35674:return Kf;case 35675:return $f;case 35676:return tp;case 5124:case 35670:return ep;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,t){i.uniform1fv(this.addr,t)}function mp(i,t){let e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function gp(i,t){let e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function _p(i,t){let e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function xp(i,t){let e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vp(i,t){let e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){let e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ep(i,t){i.uniform1iv(this.addr,t)}function Mp(i,t){i.uniform2iv(this.addr,t)}function Sp(i,t){i.uniform3iv(this.addr,t)}function bp(i,t){i.uniform4iv(this.addr,t)}function Tp(i,t){i.uniform1uiv(this.addr,t)}function Ap(i,t){i.uniform2uiv(this.addr,t)}function wp(i,t){i.uniform3uiv(this.addr,t)}function Cp(i,t){i.uniform4uiv(this.addr,t)}function Rp(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ko:a=jl;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Pp(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$l,r[a])}function Fp(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function Ip(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kl,r[a])}function Up(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return xp;case 35675:return vp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Ip}}var $o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fp(e.type)}},tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Up(e.type)}},ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Dl(i,t){i.seq.push(t),i.map[t.id]=t}function Lp(i,t,e){let n=i.name,s=n.length;for(Yo.lastIndex=0;;){let r=Yo.exec(n),a=Yo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dl(e,c===void 0?new $o(o,i,t):new tc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ec(o),Dl(e,d)),e=d}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lp(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ql(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Np=37297,Op=0;function Dp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zl=new Ut;function Qp(i){Bt._getMatrix(zl,Bt.workingColorSpace,i);let t=`mat3( ${zl.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case Ki:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dp(i.getShaderSource(t),o)}else return r}function zp(i,t){let e=Qp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gp={[wo]:"Linear",[Co]:"Reinhard",[Ro]:"Cineon",[Ss]:"ACESFilmic",[Fo]:"AgX",[Io]:"Neutral",[Po]:"Custom"};function Bp(i,t){let e=Gp[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var La=new D;function Vp(){Bt.getLuminanceCoefficients(La);let i=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Wp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Os(i){return i!==""}function Bl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(i){return i.replace(Xp,Zp)}var qp=new Map;function Zp(i,t){let e=Qt[t];if(e===void 0){let n=qp.get(t);if(n!==void 0)e=Qt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nc(e)}var Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(Jp,Yp)}function Yp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jp={[Es]:"SHADOWMAP_TYPE_PCF",[Ni]:"SHADOWMAP_TYPE_VSM"};function Kp(i){return jp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $p={[Wn]:"ENVMAP_TYPE_CUBE",[ai]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE_UV"};function tm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$p[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var em={[ai]:"ENVMAP_MODE_REFRACTION"};function nm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":em[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var im={[Wr]:"ENVMAP_BLENDING_MULTIPLY",[ll]:"ENVMAP_BLENDING_MIX",[hl]:"ENVMAP_BLENDING_ADD"};function sm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":im[i.combine]||"ENVMAP_BLENDING_NONE"}function rm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function am(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Kp(e),c=tm(e),u=nm(e),d=sm(e),h=rm(e),p=kp(e),x=Wp(r),E=s.createProgram(),g,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Os).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Os).join(`
`),f.length>0&&(f+=`
`)):(g=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==je?"#define TONE_MAPPING":"",e.toneMapping!==je?Qt.tonemapping_pars_fragment:"",e.toneMapping!==je?Bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,zp("linearToOutputTexel",e.outputColorSpace),Vp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=nc(a),a=Bl(a,e),a=Vl(a,e),o=nc(o),o=Bl(o,e),o=Vl(o,e),a=kl(a),o=kl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=T+g+a,y=T+f+o,A=Ql(s,s.VERTEX_SHADER,C),M=Ql(s,s.FRAGMENT_SHADER,y);s.attachShader(E,A),s.attachShader(E,M),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(R){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(E)||"",q=s.getShaderInfoLog(A)||"",Z=s.getShaderInfoLog(M)||"",U=O.trim(),H=q.trim(),V=Z.trim(),j=!0,tt=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,A,M);else{let rt=Gl(s,A,"vertex"),at=Gl(s,M,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+rt+`
`+at)}else U!==""?Rt("WebGLProgram: Program Info Log:",U):(H===""||V==="")&&(tt=!1);tt&&(R.diagnostics={runnable:j,programLog:U,vertexShader:{log:H,prefix:g},fragmentShader:{log:V,prefix:f}})}s.deleteShader(A),s.deleteShader(M),_=new zi(s,E),b=Hp(s,E)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(E,Np)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Op++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=M,this}var om=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sc(t),e.set(t,n)),n}},sc=class{constructor(t){this.id=om++,this.code=t,this.usedTimes=0}};function cm(i){return i===qn||i===Ps||i===Fs}function lm(i,t,e,n,s,r){let a=new ts,o=new ic,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,b,F,R,O,q){let Z=R.fog,U=O.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||H,V),tt=j&&j.mapping===bs?j.image.height:null,rt=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_t=at!==void 0?at.length:0,Wt=0;U.morphAttributes.position!==void 0&&(Wt=1),U.morphAttributes.normal!==void 0&&(Wt=2),U.morphAttributes.color!==void 0&&(Wt=3);let ne,pt,k,et;if(rt){let vt=gn[rt];ne=vt.vertexShader,pt=vt.fragmentShader}else{ne=_.vertexShader,pt=_.fragmentShader;let vt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,vt,oe),k=vt.id,et=oe.id}let $=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,wt=O.isBatchedMesh===!0,ie=!!_.map,Dt=!!_.matcap,Xt=!!j,Vt=!!_.aoMap,kt=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,_e=!!_.displacementMap,Me=!!_.emissiveMap,ae=!!_.metalnessMap,de=!!_.roughnessMap,I=_.anisotropy>0,Ne=_.clearcoat>0,Zt=_.dispersion>0,S=_.iridescence>0,m=_.sheen>0,N=_.transmission>0,G=I&&!!_.anisotropyMap,W=Ne&&!!_.clearcoatMap,nt=Ne&&!!_.clearcoatNormalMap,st=Ne&&!!_.clearcoatRoughnessMap,X=S&&!!_.iridescenceMap,Y=S&&!!_.iridescenceThicknessMap,ot=m&&!!_.sheenColorMap,Mt=m&&!!_.sheenRoughnessMap,ht=!!_.specularMap,ct=!!_.specularColorMap,Tt=!!_.specularIntensityMap,Ct=N&&!!_.transmissionMap,Nt=N&&!!_.thicknessMap,P=!!_.gradientMap,it=!!_.alphaMap,J=_.alphaTest>0,lt=!!_.alphaHash,mt=!!_.extensions,K=je;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(K=i.toneMapping);let Et={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:ne,fragmentShader:pt,defines:_.defines,customVertexShaderID:k,customFragmentShaderID:et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:wt,batchingColor:wt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:Dt,envMap:Xt,envMapMode:Xt&&j.mapping,envMapCubeUVHeight:tt,aoMap:Vt,lightMap:kt,bumpMap:ue,normalMap:pe,displacementMap:_e,emissiveMap:Me,normalMapObjectSpace:pe&&_.normalMapType===fl,normalMapTangentSpace:pe&&_.normalMapType===Is,packedNormalMap:pe&&_.normalMapType===Is&&cm(_.normalMap.format),metalnessMap:ae,roughnessMap:de,anisotropy:I,anisotropyMap:G,clearcoat:Ne,clearcoatMap:W,clearcoatNormalMap:nt,clearcoatRoughnessMap:st,dispersion:Zt,iridescence:S,iridescenceMap:X,iridescenceThicknessMap:Y,sheen:m,sheenColorMap:ot,sheenRoughnessMap:Mt,specularMap:ht,specularColorMap:ct,specularIntensityMap:Tt,transmission:N,transmissionMap:Ct,thicknessMap:Nt,gradientMap:P,opaque:_.transparent===!1&&_.blending===ni&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:J,alphaHash:lt,combine:_.combine,mapUv:ie&&x(_.map.channel),aoMapUv:Vt&&x(_.aoMap.channel),lightMapUv:kt&&x(_.lightMap.channel),bumpMapUv:ue&&x(_.bumpMap.channel),normalMapUv:pe&&x(_.normalMap.channel),displacementMapUv:_e&&x(_.displacementMap.channel),emissiveMapUv:Me&&x(_.emissiveMap.channel),metalnessMapUv:ae&&x(_.metalnessMap.channel),roughnessMapUv:de&&x(_.roughnessMap.channel),anisotropyMapUv:G&&x(_.anisotropyMap.channel),clearcoatMapUv:W&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(_.sheenRoughnessMap.channel),specularMapUv:ht&&x(_.specularMap.channel),specularColorMapUv:ct&&x(_.specularColorMap.channel),specularIntensityMapUv:Tt&&x(_.specularIntensityMap.channel),transmissionMapUv:Ct&&x(_.transmissionMap.channel),thicknessMapUv:Nt&&x(_.thicknessMap.channel),alphaMapUv:it&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||I),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(ie||it),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:At,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Wt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:K,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===qt,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(_.emissiveMap.colorSpace)===qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Ae,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(f(b,_),T(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function T(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let b=p[_.type],F;if(b){let R=gn[b];F=Tl.clone(R.uniforms)}else F=_.uniforms;return F}function y(_,b){let F=u.get(b);return F!==void 0?++F.usedTimes:(F=new am(i,b,_,s),c.push(F),u.set(b,F)),F}function A(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function w(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:C,acquireProgram:y,releaseProgram:A,releaseShaderCache:M,programs:c,dispose:w}}function hm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,E,g,f){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:g,group:f},i[t]=T):(T.id=h.id,T.object=h,T.geometry=p,T.material=x,T.materialVariant=a(h),T.groupOrder=E,T.renderOrder=h.renderOrder,T.z=g,T.group=f),t++,T}function l(h,p,x,E,g,f){let T=o(h,p,x,E,g,f);x.transmission>0?n.push(T):x.transparent===!0?s.push(T):e.push(T)}function c(h,p,x,E,g,f){let T=o(h,p,x,E,g,f);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,p,x){e.length>1&&e.sort(h||um),n.length>1&&n.sort(p||Hl),s.length>1&&s.sort(p||Hl),x&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let h=t,p=i.length;h<p;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function dm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xl,i.set(n,[a])):s>=r.length?(a=new Xl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function pm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mm=0;function gm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _m(i){let t=new fm,e=pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Kt,a=new Kt;function o(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,E=0,g=0,f=0,T=0,C=0,y=0,A=0,M=0,w=0;c.sort(gm);for(let b=0,F=c.length;b<F;b++){let R=c[b],O=R.color,q=R.intensity,Z=R.distance,U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qn?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*q,d+=O.g*q,h+=O.b*q;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],q);w++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,j=e.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(q),H.distance=Z,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[E]=H;let V=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,V.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[E]=V.matrix,R.castShadow){let j=e.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=U,y++}E++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(O).multiplyScalar(q),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=H,g++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let V=R.shadow,j=e.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=U,n.pointShadowMatrix[x]=R.shadow.matrix,C++}n.point[x]=H,x++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(q),H.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[f]=H,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let _=n.hash;(_.directionalLength!==p||_.pointLength!==x||_.spotLength!==E||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==T||_.numPointShadows!==C||_.numSpotShadows!==y||_.numSpotMaps!==A||_.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=E,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=y+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,_.directionalLength=p,_.pointLength=x,_.spotLength=E,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=T,_.numPointShadows=C,_.numSpotShadows=y,_.numSpotMaps=A,_.numLightProbes=w,n.version=mm++)}function l(c,u){let d=0,h=0,p=0,x=0,E=0,g=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){let C=c[f];if(C.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(C.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(C.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(C.width*.5,0,0),y.halfHeight.set(0,C.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),h++}else if(C.isHemisphereLight){let y=n.hemi[E];y.direction.setFromMatrixPosition(C.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:n}}function ql(i){let t=new _m(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ql(i),t.set(s,[o])):r>=a.length?(o=new ql(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Em=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Mm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Zl=new Kt,Ns=new D,jo=new D;function Sm(i,t,e){let n=new Fi,s=new Ft,r=new Ft,a=new re,o=new Rr,l=new Pr,c={},u=e.maxTextureSize,d={[bn]:Ae,[Ae]:bn,[dn]:dn},h=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:vm,fragmentShader:ym}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Le;x.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ee(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let f=this.type;this.render=function(M,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Wc&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);let b=i.getRenderTarget(),F=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=f!==this.type;q&&w.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(U=>U.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,U=M.length;Z<U;Z++){let H=M[Z],V=H.shadow;if(V===void 0){Rt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let j=V.getFrameExtents();s.multiply(j),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,V.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=tt,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ni){if(H.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Be(s.x,s.y,{format:qn,type:pn,minFilter:Te,magFilter:Te,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new An(s.x,s.y,He),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=an,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ye,V.map.depthTexture.magFilter=ye}else H.isPointLight?(V.map=new Na(s.x),V.map.depthTexture=new wr(s.x,Ke)):(V.map=new Be(s.x,s.y),V.map.depthTexture=new An(s.x,s.y,Ke)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=an,this.type===Es?(V.map.depthTexture.compareFunction=tt?Ia:Fa,V.map.depthTexture.minFilter=Te,V.map.depthTexture.magFilter=Te):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ye,V.map.depthTexture.magFilter=ye);V.camera.updateProjectionMatrix()}let rt=V.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<rt;at++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,at),i.clear();else{at===0&&(i.setRenderTarget(V.map),i.clear());let _t=V.getViewport(at);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),O.viewport(a)}if(H.isPointLight){let _t=V.camera,Wt=V.matrix,ne=H.distance||_t.far;ne!==_t.far&&(_t.far=ne,_t.updateProjectionMatrix()),Ns.setFromMatrixPosition(H.matrixWorld),_t.position.copy(Ns),jo.copy(_t.position),jo.add(Em[at]),_t.up.copy(Mm[at]),_t.lookAt(jo),_t.updateMatrixWorld(),Wt.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Zl.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Zl,_t.coordinateSystem,_t.reversedDepth)}else V.updateMatrices(H);n=V.getFrustum(),y(w,_,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&T(V,_),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(b,F,R)};function T(M,w){let _=t.update(E);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Be(s.x,s.y,{format:qn,type:pn})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,_,h,E,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,_,p,E,null)}function C(M,w,_,b){let F=null,R=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)F=R;else if(F=_.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=F.uuid,q=w.uuid,Z=c[O];Z===void 0&&(Z={},c[O]=Z);let U=Z[q];U===void 0&&(U=F.clone(),Z[q]=U,w.addEventListener("dispose",A)),F=U}if(F.visible=w.visible,F.wireframe=w.wireframe,b===Ni?F.side=w.shadowSide!==null?w.shadowSide:w.side:F.side=w.shadowSide!==null?w.shadowSide:d[w.side],F.alphaMap=w.alphaMap,F.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,F.map=w.map,F.clipShadows=w.clipShadows,F.clippingPlanes=w.clippingPlanes,F.clipIntersection=w.clipIntersection,F.displacementMap=w.displacementMap,F.displacementScale=w.displacementScale,F.displacementBias=w.displacementBias,F.wireframeLinewidth=w.wireframeLinewidth,F.linewidth=w.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let O=i.properties.get(F);O.light=_}return F}function y(M,w,_,b,F){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&F===Ni)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let q=t.update(M),Z=M.material;if(Array.isArray(Z)){let U=q.groups;for(let H=0,V=U.length;H<V;H++){let j=U[H],tt=Z[j.materialIndex];if(tt&&tt.visible){let rt=C(M,tt,b,F);M.onBeforeShadow(i,M,w,_,q,rt,j),i.renderBufferDirect(_,null,q,rt,M,j),M.onAfterShadow(i,M,w,_,q,rt,j)}}}else if(Z.visible){let U=C(M,Z,b,F);M.onBeforeShadow(i,M,w,_,q,U,null),i.renderBufferDirect(_,null,q,U,M,null),M.onAfterShadow(i,M,w,_,q,U,null)}}let O=M.children;for(let q=0,Z=O.length;q<Z;q++)y(O[q],w,_,b,F)}function A(M){M.target.removeEventListener("dispose",A);for(let _ in c){let b=c[_],F=M.target.uuid;F in b&&(b[F].dispose(),delete b[F])}}}function bm(i,t){function e(){let P=!1,it=new re,J=null,lt=new re(0,0,0,0);return{setMask:function(mt){J!==mt&&!P&&(i.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){P=mt},setClear:function(mt,K,Et,vt,oe){oe===!0&&(mt*=vt,K*=vt,Et*=vt),it.set(mt,K,Et,vt),lt.equals(it)===!1&&(i.clearColor(mt,K,Et,vt),lt.copy(it))},reset:function(){P=!1,J=null,lt.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,J=null,lt=null,mt=null;return{setReversed:function(K){if(it!==K){let Et=t.get("EXT_clip_control");K?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),it=K;let vt=mt;mt=null,this.setClear(vt)}},getReversed:function(){return it},setTest:function(K){K?$(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(K){J!==K&&!P&&(i.depthMask(K),J=K)},setFunc:function(K){if(it&&(K=Sl[K]),lt!==K){switch(K){case dr:i.depthFunc(i.NEVER);break;case fr:i.depthFunc(i.ALWAYS);break;case pr:i.depthFunc(i.LESS);break;case ii:i.depthFunc(i.LEQUAL);break;case mr:i.depthFunc(i.EQUAL);break;case gr:i.depthFunc(i.GEQUAL);break;case _r:i.depthFunc(i.GREATER);break;case xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=K}},setLocked:function(K){P=K},setClear:function(K){mt!==K&&(mt=K,it&&(K=1-K),i.clearDepth(K))},reset:function(){P=!1,J=null,lt=null,mt=null,it=!1}}}function s(){let P=!1,it=null,J=null,lt=null,mt=null,K=null,Et=null,vt=null,oe=null;return{setTest:function($t){P||($t?$(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!P&&(i.stencilMask($t),it=$t)},setFunc:function($t,$e,tn){(J!==$t||lt!==$e||mt!==tn)&&(i.stencilFunc($t,$e,tn),J=$t,lt=$e,mt=tn)},setOp:function($t,$e,tn){(K!==$t||Et!==$e||vt!==tn)&&(i.stencilOp($t,$e,tn),K=$t,Et=$e,vt=tn)},setLocked:function($t){P=$t},setClear:function($t){oe!==$t&&(i.clearStencil($t),oe=$t)},reset:function(){P=!1,it=null,J=null,lt=null,mt=null,K=null,Et=null,vt=null,oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,x=[],E=null,g=!1,f=null,T=null,C=null,y=null,A=null,M=null,w=null,_=new It(0,0,0),b=0,F=!1,R=null,O=null,q=null,Z=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),V=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),V=j>=2);let rt=null,at={},_t=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ne=new re().fromArray(_t),pt=new re().fromArray(Wt);function k(P,it,J,lt){let mt=new Uint8Array(4),K=i.createTexture();i.bindTexture(P,K),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<J;Et++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(it+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return K}let et={};et[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ii),ue(!1),pe(bo),$(i.CULL_FACE),Vt(fn);function $(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function At(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Lt(P,it){return h[P]!==it?(i.bindFramebuffer(P,it),h[P]=it,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function wt(P,it){let J=x,lt=!1;if(P){J=p.get(it),J===void 0&&(J=[],p.set(it,J));let mt=P.textures;if(J.length!==mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Et=mt.length;K<Et;K++)J[K]=i.COLOR_ATTACHMENT0+K;J.length=mt.length,lt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,lt=!0);lt&&i.drawBuffers(J)}function ie(P){return E!==P?(i.useProgram(P),E=P,!0):!1}let Dt={[Qn]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};Dt[Zc]=i.MIN,Dt[Jc]=i.MAX;let Xt={[Yc]:i.ZERO,[jc]:i.ONE,[Kc]:i.SRC_COLOR,[hr]:i.SRC_ALPHA,[sl]:i.SRC_ALPHA_SATURATE,[nl]:i.DST_COLOR,[tl]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[il]:i.ONE_MINUS_DST_COLOR,[el]:i.ONE_MINUS_DST_ALPHA,[rl]:i.CONSTANT_COLOR,[al]:i.ONE_MINUS_CONSTANT_COLOR,[ol]:i.CONSTANT_ALPHA,[cl]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(P,it,J,lt,mt,K,Et,vt,oe,$t){if(P===fn){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),P!==Hc){if(P!==f||$t!==F){if((T!==Qn||A!==Qn)&&(i.blendEquation(i.FUNC_ADD),T=Qn,A=Qn),$t)switch(P){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",P);break}else switch(P){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case To:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ao:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",P);break}C=null,y=null,M=null,w=null,_.set(0,0,0),b=0,f=P,F=$t}return}mt=mt||it,K=K||J,Et=Et||lt,(it!==T||mt!==A)&&(i.blendEquationSeparate(Dt[it],Dt[mt]),T=it,A=mt),(J!==C||lt!==y||K!==M||Et!==w)&&(i.blendFuncSeparate(Xt[J],Xt[lt],Xt[K],Xt[Et]),C=J,y=lt,M=K,w=Et),(vt.equals(_)===!1||oe!==b)&&(i.blendColor(vt.r,vt.g,vt.b,oe),_.copy(vt),b=oe),f=P,F=!1}function kt(P,it){P.side===dn?At(i.CULL_FACE):$(i.CULL_FACE);let J=P.side===Ae;it&&(J=!J),ue(J),P.blending===ni&&P.transparent===!1?Vt(fn):Vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(P){R!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),R=P)}function pe(P){P!==Vc?($(i.CULL_FACE),P!==O&&(P===bo?i.cullFace(i.BACK):P===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),O=P}function _e(P){P!==q&&(V&&i.lineWidth(P),q=P)}function Me(P,it,J){P?($(i.POLYGON_OFFSET_FILL),(Z!==it||U!==J)&&(Z=it,U=J,a.getReversed()&&(it=-it),i.polygonOffset(it,J))):At(i.POLYGON_OFFSET_FILL)}function ae(P){P?$(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function de(P){P===void 0&&(P=i.TEXTURE0+H-1),rt!==P&&(i.activeTexture(P),rt=P)}function I(P,it,J){J===void 0&&(rt===null?J=i.TEXTURE0+H-1:J=rt);let lt=at[J];lt===void 0&&(lt={type:void 0,texture:void 0},at[J]=lt),(lt.type!==P||lt.texture!==it)&&(rt!==J&&(i.activeTexture(J),rt=J),i.bindTexture(P,it||et[P]),lt.type=P,lt.texture=it)}function Ne(){let P=at[rt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function m(){try{i.texSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function N(){try{i.texSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function nt(){try{i.texStorage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function st(){try{i.texStorage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function X(){try{i.texImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function Y(){try{i.texImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function ot(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function Mt(P,it){d[P]!==it&&(i.pixelStorei(P,it),d[P]=it)}function ht(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function ct(P){pt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),pt.copy(P))}function Tt(P,it){let J=c.get(it);J===void 0&&(J=new WeakMap,c.set(it,J));let lt=J.get(P);lt===void 0&&(lt=i.getUniformBlockIndex(it,P.name),J.set(P,lt))}function Ct(P,it){let lt=c.get(it).get(P);l.get(it)!==lt&&(i.uniformBlockBinding(it,lt,P.__bindingPointIndex),l.set(it,lt))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},rt=null,at={},h={},p=new WeakMap,x=[],E=null,g=!1,f=null,T=null,C=null,y=null,A=null,M=null,w=null,_=new It(0,0,0),b=0,F=!1,R=null,O=null,q=null,Z=null,U=null,ne.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:At,bindFramebuffer:Lt,drawBuffers:wt,useProgram:ie,setBlending:Vt,setMaterial:kt,setFlipSided:ue,setCullFace:pe,setLineWidth:_e,setPolygonOffset:Me,setScissorTest:ae,activeTexture:de,bindTexture:I,unbindTexture:Ne,compressedTexImage2D:Zt,compressedTexImage3D:S,texImage2D:X,texImage3D:Y,pixelStorei:Mt,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Ct,texStorage2D:nt,texStorage3D:st,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:ht,viewport:ct,reset:Nt}}function Tm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap,d=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,m){return x?new OffscreenCanvas(S,m):wi("canvas")}function g(S,m,N){let G=1,W=Zt(S);if((W.width>N||W.height>N)&&(G=N/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let nt=Math.floor(G*W.width),st=Math.floor(G*W.height);h===void 0&&(h=E(nt,st));let X=m?E(nt,st):h;return X.width=nt,X.height=st,X.getContext("2d").drawImage(S,0,0,nt,st),Rt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+nt+"x"+st+")."),X}else return"data"in S&&Rt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function f(S){return S.generateMipmaps}function T(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,m,N,G,W,nt=!1){if(S!==null){if(i[S]!==void 0)return i[S];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st;G&&(st=t.get("EXT_texture_norm16"),st||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=m;if(m===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8),N===i.UNSIGNED_SHORT&&st&&(X=st.R16_EXT),N===i.SHORT&&st&&(X=st.R16_SNORM_EXT)),m===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),m===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8),N===i.UNSIGNED_SHORT&&st&&(X=st.RG16_EXT),N===i.SHORT&&st&&(X=st.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),m===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),m===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),m===i.RGB&&(N===i.UNSIGNED_SHORT&&st&&(X=st.RGB16_EXT),N===i.SHORT&&st&&(X=st.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),m===i.RGBA){let Y=nt?Ki:Bt.getTransfer(W);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=Y===qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&st&&(X=st.RGBA16_EXT),N===i.SHORT&&st&&(X=st.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function A(S,m){let N;return S?m===null||m===Ke||m===Di?N=i.DEPTH24_STENCIL8:m===He?N=i.DEPTH32F_STENCIL8:m===Oi&&(N=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ke||m===Di?N=i.DEPTH_COMPONENT24:m===He?N=i.DEPTH_COMPONENT32F:m===Oi&&(N=i.DEPTH_COMPONENT16),N}function M(S,m){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==ye&&S.minFilter!==Te?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function w(S){let m=S.target;m.removeEventListener("dispose",w),b(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function _(S){let m=S.target;m.removeEventListener("dispose",_),R(m)}function b(S){let m=n.get(S);if(m.__webglInit===void 0)return;let N=S.source,G=p.get(N);if(G){let W=G[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&F(S),Object.keys(G).length===0&&p.delete(N)}n.remove(S)}function F(S){let m=n.get(S);i.deleteTexture(m.__webglTexture);let N=S.source,G=p.get(N);delete G[m.__cacheKey],a.memory.textures--}function R(S){let m=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(m.__webglFramebuffer[G]))for(let W=0;W<m.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(m.__webglFramebuffer[G][W]);else i.deleteFramebuffer(m.__webglFramebuffer[G]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[G])}else{if(Array.isArray(m.__webglFramebuffer))for(let G=0;G<m.__webglFramebuffer.length;G++)i.deleteFramebuffer(m.__webglFramebuffer[G]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let G=0;G<m.__webglColorRenderbuffer.length;G++)m.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[G]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let N=S.textures;for(let G=0,W=N.length;G<W;G++){let nt=n.get(N[G]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(N[G])}n.remove(S)}let O=0;function q(){O=0}function Z(){return O}function U(S){O=S}function H(){let S=O;return S>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),O+=1,S}function V(S){let m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function j(S,m){let N=n.get(S);if(S.isVideoTexture&&I(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let G=S.image;if(G===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(N,S,m);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+m)}function tt(S,m){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){At(N,S,m);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+m)}function rt(S,m){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){At(N,S,m);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+m)}function at(S,m){let N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Lt(N,S,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+m)}let _t={[vr]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},Wt={[ye]:i.NEAREST,[ul]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},ne={[pl]:i.NEVER,[vl]:i.ALWAYS,[ml]:i.LESS,[Fa]:i.LEQUAL,[gl]:i.EQUAL,[Ia]:i.GEQUAL,[_l]:i.GREATER,[xl]:i.NOTEQUAL};function pt(S,m){if(m.type===He&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Te||m.magFilter===qr||m.magFilter===Ts||m.magFilter===Hn||m.minFilter===Te||m.minFilter===qr||m.minFilter===Ts||m.minFilter===Hn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,_t[m.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,_t[m.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,_t[m.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Wt[m.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Wt[m.minFilter]),m.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ne[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===ye||m.minFilter!==Ts&&m.minFilter!==Hn||m.type===He&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function k(S,m){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",w));let G=m.source,W=p.get(G);W===void 0&&(W={},p.set(G,W));let nt=V(m);if(nt!==S.__cacheKey){W[nt]===void 0&&(W[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),W[nt].usedTimes++;let st=W[S.__cacheKey];st!==void 0&&(W[S.__cacheKey].usedTimes--,st.usedTimes===0&&F(m)),S.__cacheKey=nt,S.__webglTexture=W[nt].texture}return N}function et(S,m,N){return Math.floor(Math.floor(S/N)/m)}function $(S,m,N,G){let nt=S.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,N,G,m.data);else{nt.sort((Mt,ht)=>Mt.start-ht.start);let st=0;for(let Mt=1;Mt<nt.length;Mt++){let ht=nt[st],ct=nt[Mt],Tt=ht.start+ht.count,Ct=et(ct.start,m.width,4),Nt=et(ht.start,m.width,4);ct.start<=Tt+1&&Ct===Nt&&et(ct.start+ct.count-1,m.width,4)===Ct?ht.count=Math.max(ht.count,ct.start+ct.count-ht.start):(++st,nt[st]=ct)}nt.length=st+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),Y=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Mt=0,ht=nt.length;Mt<ht;Mt++){let ct=nt[Mt],Tt=Math.floor(ct.start/4),Ct=Math.ceil(ct.count/4),Nt=Tt%m.width,P=Math.floor(Tt/m.width),it=Ct,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Nt,P,it,J,N,G,m.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function At(S,m,N){let G=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(G=i.TEXTURE_3D);let W=k(S,m),nt=m.source;e.bindTexture(G,S.__webglTexture,i.TEXTURE0+N);let st=n.get(nt);if(nt.version!==st.__version||W===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let J=Bt.getPrimaries(Bt.workingColorSpace),lt=m.colorSpace===wn?null:Bt.getPrimaries(m.colorSpace),mt=m.colorSpace===wn||J===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let Y=g(m.image,!1,s.maxTextureSize);Y=Ne(m,Y);let ot=r.convert(m.format,m.colorSpace),Mt=r.convert(m.type),ht=y(m.internalFormat,ot,Mt,m.normalized,m.colorSpace,m.isVideoTexture);pt(G,m);let ct,Tt=m.mipmaps,Ct=m.isVideoTexture!==!0,Nt=st.__version===void 0||W===!0,P=nt.dataReady,it=M(m,Y);if(m.isDepthTexture)ht=A(m.format===Xn,m.type),Nt&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ht,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,ht,Y.width,Y.height,0,ot,Mt,null));else if(m.isDataTexture)if(Tt.length>0){Ct&&Nt&&e.texStorage2D(i.TEXTURE_2D,it,ht,Tt[0].width,Tt[0].height);for(let J=0,lt=Tt.length;J<lt;J++)ct=Tt[J],Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ct.width,ct.height,ot,Mt,ct.data):e.texImage2D(i.TEXTURE_2D,J,ht,ct.width,ct.height,0,ot,Mt,ct.data);m.generateMipmaps=!1}else Ct?(Nt&&e.texStorage2D(i.TEXTURE_2D,it,ht,Y.width,Y.height),P&&$(m,Y,ot,Mt)):e.texImage2D(i.TEXTURE_2D,0,ht,Y.width,Y.height,0,ot,Mt,Y.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ct&&Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,ht,Tt[0].width,Tt[0].height,Y.depth);for(let J=0,lt=Tt.length;J<lt;J++)if(ct=Tt[J],m.format!==Xe)if(ot!==null)if(Ct){if(P)if(m.layerUpdates.size>0){let mt=Ho(ct.width,ct.height,m.format,m.type);for(let K of m.layerUpdates){let Et=ct.data.subarray(K*mt/ct.data.BYTES_PER_ELEMENT,(K+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,K,ct.width,ct.height,1,ot,Et)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,Y.depth,ot,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ht,ct.width,ct.height,Y.depth,0,ct.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,Y.depth,ot,Mt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ht,ct.width,ct.height,Y.depth,0,ot,Mt,ct.data)}else{Ct&&Nt&&e.texStorage2D(i.TEXTURE_2D,it,ht,Tt[0].width,Tt[0].height);for(let J=0,lt=Tt.length;J<lt;J++)ct=Tt[J],m.format!==Xe?ot!==null?Ct?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ht,ct.width,ct.height,0,ct.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ct.width,ct.height,ot,Mt,ct.data):e.texImage2D(i.TEXTURE_2D,J,ht,ct.width,ct.height,0,ot,Mt,ct.data)}else if(m.isDataArrayTexture)if(Ct){if(Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,ht,Y.width,Y.height,Y.depth),P)if(m.layerUpdates.size>0){let J=Ho(Y.width,Y.height,m.format,m.type);for(let lt of m.layerUpdates){let mt=Y.data.subarray(lt*J/Y.data.BYTES_PER_ELEMENT,(lt+1)*J/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,Y.width,Y.height,1,ot,Mt,mt)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ot,Mt,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,Y.width,Y.height,Y.depth,0,ot,Mt,Y.data);else if(m.isData3DTexture)Ct?(Nt&&e.texStorage3D(i.TEXTURE_3D,it,ht,Y.width,Y.height,Y.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ot,Mt,Y.data)):e.texImage3D(i.TEXTURE_3D,0,ht,Y.width,Y.height,Y.depth,0,ot,Mt,Y.data);else if(m.isFramebufferTexture){if(Nt)if(Ct)e.texStorage2D(i.TEXTURE_2D,it,ht,Y.width,Y.height);else{let J=Y.width,lt=Y.height;for(let mt=0;mt<it;mt++)e.texImage2D(i.TEXTURE_2D,mt,ht,J,lt,0,ot,Mt,null),J>>=1,lt>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Y.parentNode!==J){J.appendChild(Y),d.add(m),J.onpaint=lt=>{let mt=lt.changedElements;for(let K of d)mt.includes(K.image)&&(K.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let mt=i.RGBA,K=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,K,Et,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Ct&&Nt){let J=Zt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,it,ht,J.width,J.height)}for(let J=0,lt=Tt.length;J<lt;J++)ct=Tt[J],Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot,Mt,ct):e.texImage2D(i.TEXTURE_2D,J,ht,ot,Mt,ct);m.generateMipmaps=!1}else if(Ct){if(Nt){let J=Zt(Y);e.texStorage2D(i.TEXTURE_2D,it,ht,J.width,J.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Mt,Y)}else e.texImage2D(i.TEXTURE_2D,0,ht,ot,Mt,Y);f(m)&&T(G),st.__version=nt.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function Lt(S,m,N){if(m.image.length!==6)return;let G=k(S,m),W=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let nt=n.get(W);if(W.version!==nt.__version||G===!0){e.activeTexture(i.TEXTURE0+N);let st=Bt.getPrimaries(Bt.workingColorSpace),X=m.colorSpace===wn?null:Bt.getPrimaries(m.colorSpace),Y=m.colorSpace===wn||st===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ot=m.isCompressedTexture||m.image[0].isCompressedTexture,Mt=m.image[0]&&m.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!ot&&!Mt?ht[K]=g(m.image[K],!0,s.maxCubemapSize):ht[K]=Mt?m.image[K].image:m.image[K],ht[K]=Ne(m,ht[K]);let ct=ht[0],Tt=r.convert(m.format,m.colorSpace),Ct=r.convert(m.type),Nt=y(m.internalFormat,Tt,Ct,m.normalized,m.colorSpace),P=m.isVideoTexture!==!0,it=nt.__version===void 0||G===!0,J=W.dataReady,lt=M(m,ct);pt(i.TEXTURE_CUBE_MAP,m);let mt;if(ot){P&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Nt,ct.width,ct.height);for(let K=0;K<6;K++){mt=ht[K].mipmaps;for(let Et=0;Et<mt.length;Et++){let vt=mt[Et];m.format!==Xe?Tt!==null?P?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,vt.width,vt.height,Tt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Nt,vt.width,vt.height,0,vt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,vt.width,vt.height,Tt,Ct,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Nt,vt.width,vt.height,0,Tt,Ct,vt.data)}}}else{if(mt=m.mipmaps,P&&it){mt.length>0&&lt++;let K=Zt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Nt,K.width,K.height)}for(let K=0;K<6;K++)if(Mt){P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Tt,Ct,ht[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,ht[K].width,ht[K].height,0,Tt,Ct,ht[K].data);for(let Et=0;Et<mt.length;Et++){let oe=mt[Et].image[K].image;P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,oe.width,oe.height,Tt,Ct,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Nt,oe.width,oe.height,0,Tt,Ct,oe.data)}}else{P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,Ct,ht[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,Tt,Ct,ht[K]);for(let Et=0;Et<mt.length;Et++){let vt=mt[Et];P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,Tt,Ct,vt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Nt,Tt,Ct,vt.image[K])}}}f(m)&&T(i.TEXTURE_CUBE_MAP),nt.__version=W.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function wt(S,m,N,G,W,nt){let st=r.convert(N.format,N.colorSpace),X=r.convert(N.type),Y=y(N.internalFormat,st,X,N.normalized,N.colorSpace),ot=n.get(m),Mt=n.get(N);if(Mt.__renderTarget=m,!ot.__hasExternalTextures){let ht=Math.max(1,m.width>>nt),ct=Math.max(1,m.height>>nt);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,nt,Y,ht,ct,m.depth,0,st,X,null):e.texImage2D(W,nt,Y,ht,ct,0,st,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),de(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,Mt.__webglTexture,0,ae(m)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,Mt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(S,m,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),m.depthBuffer){let G=m.depthTexture,W=G&&G.isDepthTexture?G.type:null,nt=A(m.stencilBuffer,W),st=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(m),nt,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(m),nt,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,nt,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,S)}else{let G=m.textures;for(let W=0;W<G.length;W++){let nt=G[W],st=r.convert(nt.format,nt.colorSpace),X=r.convert(nt.type),Y=y(nt.internalFormat,st,X,nt.normalized,nt.colorSpace);de(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(m),Y,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(m),Y,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,Y,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(S,m,N){let G=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(m.depthTexture);if(W.__renderTarget=m,(!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),pt(i.TEXTURE_CUBE_MAP,m.depthTexture);let ot=r.convert(m.depthTexture.format),Mt=r.convert(m.depthTexture.type),ht;m.depthTexture.format===an?ht=i.DEPTH_COMPONENT24:m.depthTexture.format===Xn&&(ht=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ht,m.width,m.height,0,ot,Mt,null)}}else j(m.depthTexture,0);let nt=W.__webglTexture,st=ae(m),X=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Y=m.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===an)de(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,X,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Y,X,nt,0);else if(m.depthTexture.format===Xn)de(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,X,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Y,X,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(S){let m=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){let G=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),G){let W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=G}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)Dt(m.__webglFramebuffer[G],S,G);else{let G=S.texture.mipmaps;G&&G.length>0?Dt(m.__webglFramebuffer[0],S,0):Dt(m.__webglFramebuffer,S,0)}else if(N){m.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[G]),m.__webglDepthbuffer[G]===void 0)m.__webglDepthbuffer[G]=i.createRenderbuffer(),ie(m.__webglDepthbuffer[G],S,!1);else{let W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=m.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}else{let G=S.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ie(m.__webglDepthbuffer,S,!1);else{let W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(S,m,N){let G=n.get(S);m!==void 0&&wt(G.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Xt(S)}function kt(S){let m=S.texture,N=n.get(S),G=n.get(m);S.addEventListener("dispose",_);let W=S.textures,nt=S.isWebGLCubeRenderTarget===!0,st=W.length>1;if(st||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=m.version,a.memory.textures++),nt){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let Y=0;Y<m.mipmaps.length;Y++)N.__webglFramebuffer[X][Y]=i.createFramebuffer()}else N.__webglFramebuffer[X]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<m.mipmaps.length;X++)N.__webglFramebuffer[X]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(st)for(let X=0,Y=W.length;X<Y;X++){let ot=n.get(W[X]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&de(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){let Y=W[X];N.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[X]);let ot=r.convert(Y.format,Y.colorSpace),Mt=r.convert(Y.type),ht=y(Y.internalFormat,ot,Mt,Y.normalized,Y.colorSpace,S.isXRRenderTarget===!0),ct=ae(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ht,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,N.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),pt(i.TEXTURE_CUBE_MAP,m);for(let X=0;X<6;X++)if(m.mipmaps&&m.mipmaps.length>0)for(let Y=0;Y<m.mipmaps.length;Y++)wt(N.__webglFramebuffer[X][Y],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else wt(N.__webglFramebuffer[X],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(m)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let X=0,Y=W.length;X<Y;X++){let ot=W[X],Mt=n.get(ot),ht=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Mt.__webglTexture),pt(ht,ot),wt(N.__webglFramebuffer,S,ot,i.COLOR_ATTACHMENT0+X,ht,0),f(ot)&&T(ht)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,G.__webglTexture),pt(X,m),m.mipmaps&&m.mipmaps.length>0)for(let Y=0;Y<m.mipmaps.length;Y++)wt(N.__webglFramebuffer[Y],S,m,i.COLOR_ATTACHMENT0,X,Y);else wt(N.__webglFramebuffer,S,m,i.COLOR_ATTACHMENT0,X,0);f(m)&&T(X),e.unbindTexture()}S.depthBuffer&&Xt(S)}function ue(S){let m=S.textures;for(let N=0,G=m.length;N<G;N++){let W=m[N];if(f(W)){let nt=C(S),st=n.get(W).__webglTexture;e.bindTexture(nt,st),T(nt),e.unbindTexture()}}}let pe=[],_e=[];function Me(S){if(S.samples>0){if(de(S)===!1){let m=S.textures,N=S.width,G=S.height,W=i.COLOR_BUFFER_BIT,nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(S),X=m.length>1;if(X)for(let ot=0;ot<m.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let Y=S.texture.mipmaps;Y&&Y.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let ot=0;ot<m.length;ot++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[ot]);let Mt=n.get(m[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,N,G,0,0,N,G,W,i.NEAREST),l===!0&&(pe.length=0,_e.length=0,pe.push(i.COLOR_ATTACHMENT0+ot),S.depthBuffer&&S.resolveDepthBuffer===!1&&(pe.push(nt),_e.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ot=0;ot<m.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,st.__webglColorRenderbuffer[ot]);let Mt=n.get(m[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let m=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function ae(S){return Math.min(s.maxSamples,S.samples)}function de(S){let m=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function I(S){let m=a.render.frame;u.get(S)!==m&&(u.set(S,m),S.update())}function Ne(S,m){let N=S.colorSpace,G=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ji&&N!==wn&&(Bt.getTransfer(N)===qt?(G!==Xe||W!==De)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",N)),m}function Zt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.getTextureUnits=Z,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=rt,this.setTextureCube=at,this.rebindTextures=Vt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Am(i,t){function e(n,s=wn){let r,a=Bt.getTransfer(s);if(n===De)return i.UNSIGNED_BYTE;if(n===Jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Do)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lo)return i.BYTE;if(n===No)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===Zr)return i.INT;if(n===Ke)return i.UNSIGNED_INT;if(n===He)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Qo)return i.ALPHA;if(n===zo)return i.RGB;if(n===Xe)return i.RGBA;if(n===an)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===jr)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===qn)return i.RG;if(n===$r)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===As||n===ws||n===Cs||n===Rs)if(a===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===aa||n===oa||n===ca||n===la||n===Ps||n===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===aa)return a===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ca)return r.COMPRESSED_R11_EAC;if(n===la)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return r.COMPRESSED_RG11_EAC;if(n===ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ea||n===Ma||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Aa||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return a===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ra||n===Fs||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:wm,fragmentShader:Cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends on{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null,E=typeof XRWebGLBinding<"u",g=new rc,f={},T=e.getContextAttributes(),C=null,y=null,A=[],M=[],w=new Ft,_=null,b=new Se;b.viewport=new re;let F=new Se;F.viewport=new re;let R=[b,F],O=new kr,q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let et=A[k];return et===void 0&&(et=new Pi,A[k]=et),et.getTargetRaySpace()},this.getControllerGrip=function(k){let et=A[k];return et===void 0&&(et=new Pi,A[k]=et),et.getGripSpace()},this.getHand=function(k){let et=A[k];return et===void 0&&(et=new Pi,A[k]=et),et.getHandSpace()};function U(k){let et=M.indexOf(k.inputSource);if(et===-1)return;let $=A[et];$!==void 0&&($.update(k.inputSource,k.frame,c||a),$.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let k=0;k<A.length;k++){let et=M[k];et!==null&&(M[k]=null,A[k].disconnect(et))}q=null,Z=null,g.reset();for(let k in f)delete f[k];t.setRenderTarget(C),p=null,h=null,d=null,s=null,y=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,At=null,Lt=null;T.depth&&(Lt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=T.stencil?Xn:an,At=T.stencil?Di:Ke);let wt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Be(h.textureWidth,h.textureHeight,{format:Xe,type:De,depthTexture:new An(h.textureWidth,h.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let $={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Be(p.framebufferWidth,p.framebufferHeight,{format:Xe,type:De,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(k){for(let et=0;et<k.removed.length;et++){let $=k.removed[et],At=M.indexOf($);At>=0&&(M[At]=null,A[At].disconnect($))}for(let et=0;et<k.added.length;et++){let $=k.added[et],At=M.indexOf($);if(At===-1){for(let wt=0;wt<A.length;wt++)if(wt>=M.length){M.push($),At=wt;break}else if(M[wt]===null){M[wt]=$,At=wt;break}if(At===-1)break}let Lt=A[At];Lt&&Lt.connect($)}}let j=new D,tt=new D;function rt(k,et,$){j.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition($.matrixWorld);let At=j.distanceTo(tt),Lt=et.projectionMatrix.elements,wt=$.projectionMatrix.elements,ie=Lt[14]/(Lt[10]-1),Dt=Lt[14]/(Lt[10]+1),Xt=(Lt[9]+1)/Lt[5],Vt=(Lt[9]-1)/Lt[5],kt=(Lt[8]-1)/Lt[0],ue=(wt[8]+1)/wt[0],pe=ie*kt,_e=ie*ue,Me=At/(-kt+ue),ae=Me*-kt;if(et.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ae),k.translateZ(Me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Lt[10]===-1)k.projectionMatrix.copy(et.projectionMatrix),k.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let de=ie+Me,I=Dt+Me,Ne=pe-ae,Zt=_e+(At-ae),S=Xt*Dt/I*de,m=Vt*Dt/I*de;k.projectionMatrix.makePerspective(Ne,Zt,S,m,de,I),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function at(k,et){et===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(et.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let et=k.near,$=k.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&($=g.depthFar)),O.near=F.near=b.near=et,O.far=F.far=b.far=$,(q!==O.near||Z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,Z=O.far),O.layers.mask=k.layers.mask|6,b.layers.mask=O.layers.mask&-5,F.layers.mask=O.layers.mask&-3;let At=k.parent,Lt=O.cameras;at(O,At);for(let wt=0;wt<Lt.length;wt++)at(Lt[wt],At);Lt.length===2?rt(O,b,F):O.projectionMatrix.copy(b.projectionMatrix),_t(k,O,At)};function _t(k,et,$){$===null?k.matrix.copy(et.matrixWorld):(k.matrix.copy($.matrixWorld),k.matrix.invert(),k.matrix.multiply(et.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(et.projectionMatrix),k.projectionMatrixInverse.copy(et.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Mr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(k){return f[k]};let Wt=null;function ne(k,et){if(u=et.getViewerPose(c||a),x=et,u!==null){let $=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let At=!1;$.length!==O.cameras.length&&(O.cameras.length=0,At=!0);for(let Dt=0;Dt<$.length;Dt++){let Xt=$[Dt],Vt=null;if(p!==null)Vt=p.getViewport(Xt);else{let ue=d.getViewSubImage(h,Xt);Vt=ue.viewport,Dt===0&&(t.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(y))}let kt=R[Dt];kt===void 0&&(kt=new Se,kt.layers.enable(Dt),kt.viewport=new re,R[Dt]=kt),kt.matrix.fromArray(Xt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Xt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Dt===0&&(O.matrix.copy(kt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),At===!0&&O.cameras.push(kt)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=n.getBinding();let Dt=d.getDepthInformation($[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(Dt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&E){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<$.length;Dt++){let Xt=$[Dt].camera;if(Xt){let Vt=f[Xt];Vt||(Vt=new hs,f[Xt]=Vt);let kt=d.getCameraImage(Xt);Vt.sourceTexture=kt}}}}for(let $=0;$<A.length;$++){let At=M[$],Lt=A[$];At!==null&&Lt!==void 0&&Lt.update(At,et,c||a)}Wt&&Wt(k,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let pt=new Jl;pt.setAnimationLoop(ne),this.setAnimationLoop=function(k){Wt=k},this.dispose=function(){}}},Rm=new Kt,eh=new Ut;eh.set(-1,0,0,0,1,0,0,0,1);function Pm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Vo(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,T,C,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),E(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,T,C):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ae&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ae&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let T=t.get(f),C=T.envMap,y=T.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(eh),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,T,C){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=C*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){let T=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){let M=A.program;n.uniformBlockBinding(y,M)}function c(y,A){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",T));let w=A.program;n.updateUBOMapping(y,w);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let A=d();y.__bindingPointIndex=A;let M=i.createBuffer(),w=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let A=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,b=M.length;_<b;_++){let F=M[_];if(Array.isArray(F))for(let R=0,O=F.length;R<O;R++)p(F[R],_,R,w);else p(F,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,A,M,w){if(E(y,A,M,w)===!0){let _=y.__offset,b=y.value;if(Array.isArray(b)){let F=0;for(let R=0;R<b.length;R++){let O=b[R],q=f(O);x(O,y.__data,F),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,A,M){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,M)}function E(y,A,M,w){let _=y.value,b=A+"_"+M;if(w[b]===void 0)return typeof _=="number"||typeof _=="boolean"?w[b]=_:ArrayBuffer.isView(_)?w[b]=_.slice():w[b]=_.clone(),!0;{let F=w[b];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return w[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function g(y){let A=y.uniforms,M=0,w=16;for(let b=0,F=A.length;b<F;b++){let R=Array.isArray(A[b])?A[b]:[A[b]];for(let O=0,q=R.length;O<q;O++){let Z=R[O],U=Array.isArray(Z.value)?Z.value:[Z.value];for(let H=0,V=U.length;H<V;H++){let j=U[H],tt=f(j),rt=M%w,at=rt%tt.boundary,_t=rt+at;M+=at,_t!==0&&w-_t<tt.storage&&(M+=w-_t),Z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=tt.storage}}}let _=M%w;return _>0&&(M+=w-_),y.__size=M,y.__cache={},this}function f(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",y),A}function T(y){let A=y.target;A.removeEventListener("dispose",T);let M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var Im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mn=null;function Um(){return mn===null&&(mn=new rs(Im,16,16,qn,pn),mn.name="DFG_LUT",mn.minFilter=Te,mn.magFilter=Te,mn.wrapS=rn,mn.wrapT=rn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}var Oa=class{constructor(t={}){let{canvas:e=yl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=De}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let E=p,g=new Set([ta,$r,Kr]),f=new Set([De,Ke,Oi,Di,Jr,Yr]),T=new Uint32Array(4),C=new Int32Array(4),y=new D,A=null,M=null,w=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=je,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,R=!1,O=null,q=null,Z=null,U=null;this._outputColorSpace=Pe;let H=0,V=0,j=null,tt=-1,rt=null,at=new re,_t=new re,Wt=null,ne=new It(0),pt=0,k=e.width,et=e.height,$=1,At=null,Lt=null,wt=new re(0,0,k,et),ie=new re(0,0,k,et),Dt=!1,Xt=new Fi,Vt=!1,kt=!1,ue=new Kt,pe=new D,_e=new re,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function de(){return j===null?$:1}let I=n;function Ne(v,L){return e.getContext(v,L)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",$e,!1),I===null){let L="webgl2";if(I=Ne(L,v),I===null)throw Ne(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Pt("WebGLRenderer: "+v.message),v}let Zt,S,m,N,G,W,nt,st,X,Y,ot,Mt,ht,ct,Tt,Ct,Nt,P,it,J,lt,mt,K;function Et(){Zt=new Gf(I),Zt.init(),lt=new Am(I,Zt),S=new If(I,Zt,t,lt),m=new bm(I,Zt),S.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),q=I.createFramebuffer(),Z=I.createFramebuffer(),U=I.createFramebuffer(),N=new kf(I),G=new hm,W=new Tm(I,Zt,m,G,S,lt,N),nt=new zf(F),st=new Xh(I),mt=new Pf(I,st),X=new Bf(I,st,N,mt),Y=new Hf(I,X,st,mt,N),P=new Wf(I,S,W),Tt=new Uf(G),ot=new lm(F,nt,Zt,S,mt,Tt),Mt=new Pm(F,G),ht=new dm,ct=new xm(Zt),Nt=new Rf(F,nt,m,Y,x,l),Ct=new Sm(F,Y,S),K=new Fm(I,N,S,m),it=new Ff(I,Zt,N),J=new Vf(I,Zt,N),N.programs=ot.programs,F.capabilities=S,F.extensions=Zt,F.properties=G,F.renderLists=ht,F.shadowMap=Ct,F.state=m,F.info=N}Et(),E!==De&&(b=new qf(E,e.width,e.height,o,s,r));let vt=new ac(F,I);this.xr=vt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=Zt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Zt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(k,et,!1))},this.getSize=function(v){return v.set(k,et)},this.setSize=function(v,L,B=!0){if(vt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,et=L,e.width=Math.floor(v*$),e.height=Math.floor(L*$),B===!0&&(e.style.width=v+"px",e.style.height=L+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(k*$,et*$).floor()},this.setDrawingBufferSize=function(v,L,B){k=v,et=L,$=B,e.width=Math.floor(v*B),e.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(E===De){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(at)},this.getViewport=function(v){return v.copy(wt)},this.setViewport=function(v,L,B,Q){v.isVector4?wt.set(v.x,v.y,v.z,v.w):wt.set(v,L,B,Q),m.viewport(at.copy(wt).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(ie)},this.setScissor=function(v,L,B,Q){v.isVector4?ie.set(v.x,v.y,v.z,v.w):ie.set(v,L,B,Q),m.scissor(_t.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(v){m.setScissorTest(Dt=v)},this.setOpaqueSort=function(v){At=v},this.setTransparentSort=function(v){Lt=v},this.getClearColor=function(v){return v.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let Q=0;if(v){let z=!1;if(j!==null){let ft=j.texture.format;z=g.has(ft)}if(z){let ft=j.texture.type,xt=f.has(ft),dt=Nt.getClearColor(),yt=Nt.getClearAlpha(),St=dt.r,Ot=dt.g,zt=dt.b;xt?(T[0]=St,T[1]=Ot,T[2]=zt,T[3]=yt,I.clearBufferuiv(I.COLOR,0,T)):(C[0]=St,C[1]=Ot,C[2]=zt,C[3]=yt,I.clearBufferiv(I.COLOR,0,C))}else Q|=I.COLOR_BUFFER_BIT}L&&(Q|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Nt.dispose(),ht.dispose(),ct.dispose(),G.dispose(),nt.dispose(),Y.dispose(),mt.dispose(),K.dispose(),ot.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",lc),vt.removeEventListener("sessionend",hc),Jn.stop()};function oe(v){v.preventDefault(),Bo("WebGLRenderer: Context Lost."),R=!0}function $t(){Bo("WebGLRenderer: Context Restored."),R=!1;let v=N.autoReset,L=Ct.enabled,B=Ct.autoUpdate,Q=Ct.needsUpdate,z=Ct.type;Et(),N.autoReset=v,Ct.enabled=L,Ct.autoUpdate=B,Ct.needsUpdate=Q,Ct.type=z}function $e(v){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tn(v){let L=v.target;L.removeEventListener("dispose",tn),sh(L)}function sh(v){rh(v),G.remove(v)}function rh(v){let L=G.get(v).programs;L!==void 0&&(L.forEach(function(B){ot.releaseProgram(B)}),v.isShaderMaterial&&ot.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,Q,z,ft){L===null&&(L=Me);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=ch(v,L,B,Q,z);m.setMaterial(Q,xt);let yt=B.index,St=1;if(Q.wireframe===!0){if(yt=X.getWireframeAttribute(B),yt===void 0)return;St=2}let Ot=B.drawRange,zt=B.attributes.position,bt=Ot.start*St,Jt=(Ot.start+Ot.count)*St;ft!==null&&(bt=Math.max(bt,ft.start*St),Jt=Math.min(Jt,(ft.start+ft.count)*St)),yt!==null?(bt=Math.max(bt,0),Jt=Math.min(Jt,yt.count)):zt!=null&&(bt=Math.max(bt,0),Jt=Math.min(Jt,zt.count));let le=Jt-bt;if(le<0||le===1/0)return;mt.setup(z,Q,dt,B,yt);let ce,Yt=it;if(yt!==null&&(ce=st.get(yt),Yt=J,Yt.setIndex(ce)),z.isMesh)Q.wireframe===!0?(m.setLineWidth(Q.wireframeLinewidth*de()),Yt.setMode(I.LINES)):Yt.setMode(I.TRIANGLES);else if(z.isLine){let we=Q.linewidth;we===void 0&&(we=1),m.setLineWidth(we*de()),z.isLineSegments?Yt.setMode(I.LINES):z.isLineLoop?Yt.setMode(I.LINE_LOOP):Yt.setMode(I.LINE_STRIP)}else z.isPoints?Yt.setMode(I.POINTS):z.isSprite&&Yt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let we=z._multiDrawStarts,gt=z._multiDrawCounts,Qe=z._multiDrawCount,Ht=yt?st.get(yt).bytesPerElement:1,ke=G.get(Q).currentProgram.getUniforms();for(let en=0;en<Qe;en++)ke.setValue(I,"_gl_DrawID",en),Yt.render(we[en]/Ht,gt[en])}else if(z.isInstancedMesh)Yt.renderInstances(bt,le,z.count);else if(B.isInstancedBufferGeometry){let we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,we);Yt.renderInstances(bt,le,gt)}else Yt.render(bt,le)};function cc(v,L,B){v.transparent===!0&&v.side===dn&&v.forceSinglePass===!1?(v.side=Ae,v.needsUpdate=!0,Qs(v,L,B),v.side=bn,v.needsUpdate=!0,Qs(v,L,B),v.side=dn):Qs(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),M=ct.get(B),M.init(L),_.push(M),B.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),v!==B&&v.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights();let Q=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let dt=ft[xt];cc(dt,B,z),Q.add(dt)}else cc(ft,B,z),Q.add(ft)}),M=_.pop(),Q},this.compileAsync=function(v,L,B=null){let Q=this.compile(v,L,B);return new Promise(z=>{function ft(){if(Q.forEach(function(xt){G.get(xt).currentProgram.isReady()&&Q.delete(xt)}),Q.size===0){z(v);return}setTimeout(ft,10)}Zt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ga=null;function ah(v){Ga&&Ga(v)}function lc(){Jn.stop()}function hc(){Jn.start()}let Jn=new Jl;Jn.setAnimationLoop(ah),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(v){Ga=v,vt.setAnimationLoop(v),v===null?Jn.stop():Jn.start()},vt.addEventListener("sessionstart",lc),vt.addEventListener("sessionend",hc),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(v,L);let B=vt.enabled===!0&&vt.isPresenting===!0,Q=b!==null&&(j===null||B)&&b.begin(F,j);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(L),L=vt.getCamera()),v.isScene===!0&&v.onBeforeRender(F,v,L,j),M=ct.get(v,_.length),M.init(L),M.state.textureUnits=W.getTextureUnits(),_.push(M),ue.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xt.setFromProjectionMatrix(ue,Ye,L.reversedDepth),kt=this.localClippingEnabled,Vt=Tt.init(this.clippingPlanes,kt),A=ht.get(v,w.length),A.init(),w.push(A),vt.enabled===!0&&vt.isPresenting===!0){let xt=F.xr.getDepthSensingMesh();xt!==null&&Ba(xt,L,-1/0,F.sortObjects)}Ba(v,L,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort(At,Lt,L.reversedDepth),ae=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,ae&&Nt.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Tt.beginShadows();let z=M.state.shadowsArray;if(Ct.render(z,v,L),Vt===!0&&Tt.endShadows(),(Q&&b.hasRenderPass())===!1){let xt=A.opaque,dt=A.transmissive;if(M.setupLights(),L.isArrayCamera){let yt=L.cameras;if(dt.length>0)for(let St=0,Ot=yt.length;St<Ot;St++){let zt=yt[St];dc(xt,dt,v,zt)}ae&&Nt.render(v);for(let St=0,Ot=yt.length;St<Ot;St++){let zt=yt[St];uc(A,v,zt,zt.viewport)}}else dt.length>0&&dc(xt,dt,v,L),ae&&Nt.render(v),uc(A,v,L)}j!==null&&V===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),Q&&b.end(F),v.isScene===!0&&v.onAfterRender(F,v,L),mt.resetDefaultState(),tt=-1,rt=null,_.pop(),_.length>0?(M=_[_.length-1],W.setTextureUnits(M.state.textureUnits),Vt===!0&&Tt.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,O!==null&&O.renderEnd()};function Ba(v,L,B,Q){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Xt.intersectsSprite(v)){Q&&_e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ue);let xt=Y.update(v),dt=v.material;dt.visible&&A.push(v,xt,dt,B,_e.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Xt.intersectsObject(v))){let xt=Y.update(v),dt=v.material;if(Q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),_e.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),_e.copy(xt.boundingSphere.center)),_e.applyMatrix4(v.matrixWorld).applyMatrix4(ue)),Array.isArray(dt)){let yt=xt.groups;for(let St=0,Ot=yt.length;St<Ot;St++){let zt=yt[St],bt=dt[zt.materialIndex];bt&&bt.visible&&A.push(v,xt,bt,B,_e.z,zt)}}else dt.visible&&A.push(v,xt,dt,B,_e.z,null)}}let ft=v.children;for(let xt=0,dt=ft.length;xt<dt;xt++)Ba(ft[xt],L,B,Q)}function uc(v,L,B,Q){let{opaque:z,transmissive:ft,transparent:xt}=v;M.setupLightsView(B),Vt===!0&&Tt.setGlobalState(F.clippingPlanes,B),Q&&m.viewport(at.copy(Q)),z.length>0&&Ds(z,L,B),ft.length>0&&Ds(ft,L,B),xt.length>0&&Ds(xt,L,B),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function dc(v,L,B,Q){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){let bt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new Be(1,1,{generateMipmaps:!0,type:bt?pn:De,minFilter:Hn,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let ft=M.state.transmissionRenderTarget[Q.id],xt=Q.viewport||at;ft.setSize(xt.z*F.transmissionResolutionScale,xt.w*F.transmissionResolutionScale);let dt=F.getRenderTarget(),yt=F.getActiveCubeFace(),St=F.getActiveMipmapLevel();F.setRenderTarget(ft),F.getClearColor(ne),pt=F.getClearAlpha(),pt<1&&F.setClearColor(16777215,.5),F.clear(),ae&&Nt.render(B);let Ot=F.toneMapping;F.toneMapping=je;let zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),Vt===!0&&Tt.setGlobalState(F.clippingPlanes,Q),Ds(v,B,Q),W.updateMultisampleRenderTarget(ft),W.updateRenderTargetMipmap(ft),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Jt=0,le=L.length;Jt<le;Jt++){let ce=L[Jt],{object:Yt,geometry:we,material:gt,group:Qe}=ce;if(gt.side===dn&&Yt.layers.test(Q.layers)){let Ht=gt.side;gt.side=Ae,gt.needsUpdate=!0,fc(Yt,B,Q,we,gt,Qe),gt.side=Ht,gt.needsUpdate=!0,bt=!0}}bt===!0&&(W.updateMultisampleRenderTarget(ft),W.updateRenderTargetMipmap(ft))}F.setRenderTarget(dt,yt,St),F.setClearColor(ne,pt),zt!==void 0&&(Q.viewport=zt),F.toneMapping=Ot}function Ds(v,L,B){let Q=L.isScene===!0?L.overrideMaterial:null;for(let z=0,ft=v.length;z<ft;z++){let xt=v[z],{object:dt,geometry:yt,group:St}=xt,Ot=xt.material;Ot.allowOverride===!0&&Q!==null&&(Ot=Q),dt.layers.test(B.layers)&&fc(dt,L,B,yt,Ot,St)}}function fc(v,L,B,Q,z,ft){v.onBeforeRender(F,L,B,Q,z,ft),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(F,L,B,Q,v,ft),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=Ae,z.needsUpdate=!0,F.renderBufferDirect(B,L,Q,z,v,ft),z.side=bn,z.needsUpdate=!0,F.renderBufferDirect(B,L,Q,z,v,ft),z.side=dn):F.renderBufferDirect(B,L,Q,z,v,ft),v.onAfterRender(F,L,B,Q,z,ft)}function Qs(v,L,B){L.isScene!==!0&&(L=Me);let Q=G.get(v),z=M.state.lights,ft=M.state.shadowsArray,xt=z.state.version,dt=ot.getParameters(v,z.state,ft,L,B,M.state.lightProbeGridArray),yt=ot.getProgramCacheKey(dt),St=Q.programs;Q.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,Q.fog=L.fog;let Ot=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;Q.envMap=nt.get(v.envMap||Q.environment,Ot),Q.envMapRotation=Q.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,St===void 0&&(v.addEventListener("dispose",tn),St=new Map,Q.programs=St);let zt=St.get(yt);if(zt!==void 0){if(Q.currentProgram===zt&&Q.lightsStateVersion===xt)return mc(v,dt),zt}else dt.uniforms=ot.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,B,dt),v.onBeforeCompile(dt,F),zt=ot.acquireProgram(dt,yt),St.set(yt,zt),Q.uniforms=dt.uniforms;let bt=Q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=Tt.uniform),mc(v,dt),Q.needsLights=hh(v),Q.lightsStateVersion=xt,Q.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),Q.lightProbeGrid=M.state.lightProbeGridArray.length>0,Q.currentProgram=zt,Q.uniformsList=null,zt}function pc(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=zi.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function mc(v,L){let B=G.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function oh(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let B=0,Q=v.length;B<Q;B++){let z=v[B];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function ch(v,L,B,Q,z){L.isScene!==!0&&(L=Me),W.resetTextureUnits();let ft=L.fog,xt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?L.environment:null,dt=j===null?F.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bt.workingColorSpace,yt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,St=nt.get(Q.envMap||xt,yt),Ot=Q.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,zt=!!B.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),bt=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,le=!!B.morphAttributes.color,ce=je;Q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ce=F.toneMapping);let Yt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,we=Yt!==void 0?Yt.length:0,gt=G.get(Q),Qe=M.state.lights;if(Vt===!0&&(kt===!0||v!==rt)){let te=v===rt&&Q.id===tt;Tt.setState(Q,v,te)}let Ht=!1;Q.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Qe.state.version||gt.outputColorSpace!==dt||z.isBatchedMesh&&gt.batching===!1||!z.isBatchedMesh&&gt.batching===!0||z.isBatchedMesh&&gt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&gt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&gt.instancing===!1||!z.isInstancedMesh&&gt.instancing===!0||z.isSkinnedMesh&&gt.skinning===!1||!z.isSkinnedMesh&&gt.skinning===!0||z.isInstancedMesh&&gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&gt.instancingMorph===!1&&z.morphTexture!==null||gt.envMap!==St||Q.fog===!0&&gt.fog!==ft||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Ot||gt.vertexTangents!==zt||gt.morphTargets!==bt||gt.morphNormals!==Jt||gt.morphColors!==le||gt.toneMapping!==ce||gt.morphTargetsCount!==we||!!gt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ht=!0):(Ht=!0,gt.__version=Q.version);let ke=gt.currentProgram;Ht===!0&&(ke=Qs(Q,L,z),O&&Q.isNodeMaterial&&O.onUpdateProgram(Q,ke,gt));let en=!1,Cn=!1,li=!1,jt=ke.getUniforms(),he=gt.uniforms;if(m.useProgram(ke.program)&&(en=!0,Cn=!0,li=!0),Q.id!==tt&&(tt=Q.id,Cn=!0),gt.needsLights){let te=oh(M.state.lightProbeGridArray,z);gt.lightProbeGrid!==te&&(gt.lightProbeGrid=te,Cn=!0)}if(en||rt!==v){m.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),jt.setValue(I,"projectionMatrix",v.projectionMatrix),jt.setValue(I,"viewMatrix",v.matrixWorldInverse);let Pn=jt.map.cameraPosition;Pn!==void 0&&Pn.setValue(I,pe.setFromMatrixPosition(v.matrixWorld)),S.logarithmicDepthBuffer&&jt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&jt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),rt!==v&&(rt=v,Cn=!0,li=!0)}if(gt.needsLights&&(Qe.state.directionalShadowMap.length>0&&jt.setValue(I,"directionalShadowMap",Qe.state.directionalShadowMap,W),Qe.state.spotShadowMap.length>0&&jt.setValue(I,"spotShadowMap",Qe.state.spotShadowMap,W),Qe.state.pointShadowMap.length>0&&jt.setValue(I,"pointShadowMap",Qe.state.pointShadowMap,W)),z.isSkinnedMesh){jt.setOptional(I,z,"bindMatrix"),jt.setOptional(I,z,"bindMatrixInverse");let te=z.skeleton;te&&(te.boneTexture===null&&te.computeBoneTexture(),jt.setValue(I,"boneTexture",te.boneTexture,W))}z.isBatchedMesh&&(jt.setOptional(I,z,"batchingTexture"),jt.setValue(I,"batchingTexture",z._matricesTexture,W),jt.setOptional(I,z,"batchingIdTexture"),jt.setValue(I,"batchingIdTexture",z._indirectTexture,W),jt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&jt.setValue(I,"batchingColorTexture",z._colorsTexture,W));let Rn=B.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&P.update(z,B,ke),(Cn||gt.receiveShadow!==z.receiveShadow)&&(gt.receiveShadow=z.receiveShadow,jt.setValue(I,"receiveShadow",z.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&L.environment!==null&&(he.envMapIntensity.value=L.environmentIntensity),he.dfgLUT!==void 0&&(he.dfgLUT.value=Um()),Cn){if(jt.setValue(I,"toneMappingExposure",F.toneMappingExposure),gt.needsLights&&lh(he,li),ft&&Q.fog===!0&&Mt.refreshFogUniforms(he,ft),Mt.refreshMaterialUniforms(he,Q,$,et,M.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.lightProbeGrid){let te=gt.lightProbeGrid;he.probesSH.value=te.texture,he.probesMin.value.copy(te.boundingBox.min),he.probesMax.value.copy(te.boundingBox.max),he.probesResolution.value.copy(te.resolution)}zi.upload(I,pc(gt),he,W)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(zi.upload(I,pc(gt),he,W),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&jt.setValue(I,"center",z.center),jt.setValue(I,"modelViewMatrix",z.modelViewMatrix),jt.setValue(I,"normalMatrix",z.normalMatrix),jt.setValue(I,"modelMatrix",z.matrixWorld),Q.uniformsGroups!==void 0){let te=Q.uniformsGroups;for(let Pn=0,hi=te.length;Pn<hi;Pn++){let gc=te[Pn];K.update(gc,ke),K.bind(gc,ke)}}return ke}function lh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function hh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(v,L,B){let Q=G.get(v);Q.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=L,G.get(v.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:B,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let B=G.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,B=0){j=v,H=L,V=B;let Q=null,z=!1,ft=!1;if(v){let dt=G.get(v);if(dt.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(I.FRAMEBUFFER,dt.__webglFramebuffer),at.copy(v.viewport),_t.copy(v.scissor),Wt=v.scissorTest,m.viewport(at),m.scissor(_t),m.setScissorTest(Wt),tt=-1;return}else if(dt.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(dt.__hasExternalTextures)W.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ot=v.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&G.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ft=!0);let St=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(St[L])?Q=St[L][B]:Q=St[L],z=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?Q=G.get(v).__webglMultisampledFramebuffer:Array.isArray(St)?Q=St[B]:Q=St,at.copy(v.viewport),_t.copy(v.scissor),Wt=v.scissorTest}else at.copy(wt).multiplyScalar($).floor(),_t.copy(ie).multiplyScalar($).floor(),Wt=Dt;if(B!==0&&(Q=q),m.bindFramebuffer(I.FRAMEBUFFER,Q)&&m.drawBuffers(v,Q),m.viewport(at),m.scissor(_t),m.setScissorTest(Wt),z){let dt=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,B)}else if(ft){let dt=L;for(let yt=0;yt<v.textures.length;yt++){let St=G.get(v.textures[yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+yt,St.__webglTexture,B,dt)}}else if(v!==null&&B!==0){let dt=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,B)}tt=-1},this.readRenderTargetPixels=function(v,L,B,Q,z,ft,xt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){m.bindFramebuffer(I.FRAMEBUFFER,yt);try{let St=v.textures[dt],Ot=St.format,zt=St.type;if(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt),!S.textureFormatReadable(Ot)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(zt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-Q&&B>=0&&B<=v.height-z&&I.readPixels(L,B,Q,z,lt.convert(Ot),lt.convert(zt),ft)}finally{let St=j!==null?G.get(j).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,Q,z,ft,xt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(L>=0&&L<=v.width-Q&&B>=0&&B<=v.height-z){m.bindFramebuffer(I.FRAMEBUFFER,yt);let St=v.textures[dt],Ot=St.format,zt=St.type;if(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt),!S.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.bufferData(I.PIXEL_PACK_BUFFER,ft.byteLength,I.STREAM_READ),I.readPixels(L,B,Q,z,lt.convert(Ot),lt.convert(zt),0);let Jt=j!==null?G.get(j).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,Jt);let le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ml(I,le,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ft),I.deleteBuffer(bt),I.deleteSync(le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){let Q=Math.pow(2,-B),z=Math.floor(v.image.width*Q),ft=Math.floor(v.image.height*Q),xt=L!==null?L.x:0,dt=L!==null?L.y:0;W.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,xt,dt,z,ft),m.unbindTexture()},this.copyTextureToTexture=function(v,L,B=null,Q=null,z=0,ft=0){let xt,dt,yt,St,Ot,zt,bt,Jt,le,ce=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(B!==null)xt=B.max.x-B.min.x,dt=B.max.y-B.min.y,yt=B.isBox3?B.max.z-B.min.z:1,St=B.min.x,Ot=B.min.y,zt=B.isBox3?B.min.z:0;else{let he=Math.pow(2,-z);xt=Math.floor(ce.width*he),dt=Math.floor(ce.height*he),v.isDataArrayTexture?yt=ce.depth:v.isData3DTexture?yt=Math.floor(ce.depth*he):yt=1,St=0,Ot=0,zt=0}Q!==null?(bt=Q.x,Jt=Q.y,le=Q.z):(bt=0,Jt=0,le=0);let Yt=lt.convert(L.format),we=lt.convert(L.type),gt;L.isData3DTexture?(W.setTexture3D(L,0),gt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(W.setTexture2DArray(L,0),gt=I.TEXTURE_2D_ARRAY):(W.setTexture2D(L,0),gt=I.TEXTURE_2D),m.activeTexture(I.TEXTURE0),m.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),m.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),m.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let Qe=m.getParameter(I.UNPACK_ROW_LENGTH),Ht=m.getParameter(I.UNPACK_IMAGE_HEIGHT),ke=m.getParameter(I.UNPACK_SKIP_PIXELS),en=m.getParameter(I.UNPACK_SKIP_ROWS),Cn=m.getParameter(I.UNPACK_SKIP_IMAGES);m.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),m.pixelStorei(I.UNPACK_SKIP_PIXELS,St),m.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),m.pixelStorei(I.UNPACK_SKIP_IMAGES,zt);let li=v.isDataArrayTexture||v.isData3DTexture,jt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let he=G.get(v),Rn=G.get(L),te=G.get(he.__renderTarget),Pn=G.get(Rn.__renderTarget);m.bindFramebuffer(I.READ_FRAMEBUFFER,te.__webglFramebuffer),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let hi=0;hi<yt;hi++)li&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(v).__webglTexture,z,zt+hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(L).__webglTexture,ft,le+hi)),I.blitFramebuffer(St,Ot,xt,dt,bt,Jt,xt,dt,I.DEPTH_BUFFER_BIT,I.NEAREST);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||G.has(v)){let he=G.get(v),Rn=G.get(L);m.bindFramebuffer(I.READ_FRAMEBUFFER,Z),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let te=0;te<yt;te++)li?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,he.__webglTexture,z,zt+te):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,z),jt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,ft,le+te):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,ft),z!==0?I.blitFramebuffer(St,Ot,xt,dt,bt,Jt,xt,dt,I.COLOR_BUFFER_BIT,I.NEAREST):jt?I.copyTexSubImage3D(gt,ft,bt,Jt,le+te,St,Ot,xt,dt):I.copyTexSubImage2D(gt,ft,bt,Jt,St,Ot,xt,dt);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else jt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(gt,ft,bt,Jt,le,xt,dt,yt,Yt,we,ce.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,ft,bt,Jt,le,xt,dt,yt,Yt,ce.data):I.texSubImage3D(gt,ft,bt,Jt,le,xt,dt,yt,Yt,we,ce):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ft,bt,Jt,xt,dt,Yt,we,ce.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ft,bt,Jt,ce.width,ce.height,Yt,ce.data):I.texSubImage2D(I.TEXTURE_2D,ft,bt,Jt,xt,dt,Yt,we,ce);m.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ht),m.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),m.pixelStorei(I.UNPACK_SKIP_ROWS,en),m.pixelStorei(I.UNPACK_SKIP_IMAGES,Cn),ft===0&&L.generateMipmaps&&I.generateMipmap(gt),m.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),m.unbindTexture()},this.resetState=function(){H=0,V=0,j=null,m.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var za=class extends si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new zn;t.deleteAttribute("uv");let e=new ri({side:Ae}),n=new ri,s=new kn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ee(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new os(t,n,6),o=new Ee;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ee(t,Vi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ee(t,Vi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ee(t,Vi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ee(t,Vi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new ee(t,Vi(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new ee(t,Vi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Vi(i){return new ms({color:0,emissive:16777215,emissiveIntensity:i})}var oc={profile:[[.2022,0],[.3309,.0126],[.3713,.0253],[.3971,.038],[.4007,.0507],[.4007,.0633],[.3713,.076],[.3713,.0886],[.375,.1012],[.375,.1139],[.3824,.1266],[.386,.1393],[.386,.1519],[.386,.1645],[.3934,.1772],[.3934,.1898],[.3934,.2026],[.3971,.2152],[.4007,.2279],[.4044,.2405],[.4118,.2531],[.4154,.2658],[.4265,.2785],[.4559,.2912],[.5404,.3038],[.6544,.3164],[.7574,.3291],[.8382,.3417],[.8971,.3545],[.9412,.3671],[.9743,.3798],[.9926,.3924],[1,.405],[1,.4177],[1,.4304],[1,.4431],[1,.4557],[1,.4683],[.9963,.481],[.9926,.4936],[.9926,.5064],[.9926,.519],[.9926,.5317],[.989,.5443],[.989,.5569],[.9853,.5696],[.9853,.5823],[.9816,.595],[.9816,.6076],[.9816,.6202],[.9779,.6329],[.9779,.6455],[.9743,.6583],[.9743,.6709],[.9706,.6836],[.9706,.6962],[.9706,.7088],[.9632,.7215],[.9632,.7342],[.9632,.7469],[.9596,.7595],[.9596,.7721],[.9596,.7848],[.9522,.7974],[.9522,.8102],[.9522,.8228],[.9485,.8355],[.9449,.8481],[.9449,.8607],[.9449,.8734],[.9412,.8861],[.9412,.8988],[.9375,.9114],[.9338,.924],[.9338,.9367],[.9228,.9493],[.9191,.962],[.9007,.9747],[.8125,.9874],[.1066,1]],aspect:.129};var nh="data:image/jpeg;base64,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P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+SfT9aPJPp+tO3e1G72oDQb5J9P1o8k+n607d7UbvagNBvkn0/WjyT6frTt3tRu9qA0G+S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ouFiPcPQ0bh6GpNq+tG1fWi4WI9w9DRuHoak2r60bV9aLhYj3D0NG4ehqTavrRtX1ouFhmD70YPvRuNG40xhg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNABg+9GD70bjRuNACbaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGobaNtHzUfNQGo7B9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfSl+X1o+X1oATB9KMH0pfl9aPl9aAEwfSjB9KX5fWj5fWgBMH0owfS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OcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMSh5UtHlS1fyPSjI9KOcPqMRM0ZooqND0QzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQAzRmiijQBPwo/CjmjmkK4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXD8KPwo5o5oC4fhR+FHNHNAXGbxRvFVfNFHmitOU4fbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7YtbxRvFVfNFHmijlD2xa3ijeKq+aKPNFHKHti1vFG8VV80UeaKOUPbFreKN4qr5oo80Ucoe2LW8UbxVXzRR5oo5Q9sWt4o3iqvmijzRRyh7Yr7zRvNNwaMGuix4PtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ox280bzTcGjBosHtGO3mjeabg0YNFg9ozT+xn0o+xn0rS3+9G/3pisZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/wB6N/vQFjN+xn0o+xn0rS3+9G/3oCxm/Yz6UfYz6Vpb/ejf70BYzfsZ9KPsZ9K0t/vRv96AsZv2M+lH2M+laW/3o3+9AWM37GfSj7GfStLf70b/AHoCxm/Yz6UfYz6Vpb/ejf70BYp7X96Nr+9X9g9DRsHoaQFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAFDa/vRtf3q/sHoaNg9DQBQ2v70bX96v7B6GjYPQ0AUNr+9G1/er+weho2D0NAC5HpRkelVd9G+qAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAtZHpRkelVd9G+gC1kelGR6VV30b6ALWR6UZHpVXfRvoAp+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCz5n1o8z61W80UeaKALPmfWjzPrVbzRR5ooAs+Z9aPM+tVvNFHmigCDd7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFAD93v+tG73/WmUUAP3e/60bvf9aZRQA/d7/rRu9/1plFADc+woz7CkopWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC59hRn2FJRRYBc+woz7CkoosAufYUZ9hSUUWAXPsKM+wpKKLALn2FGfYUlFFgFz7CjPsKSiiwC4HrRgetO2e1Gz2oLsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhuB60YHrTtntRs9qAsNwPWjA9ads9qNntQFhce9GPenbaNtI1sNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFhuPejHvTttG2gLDce9GPenbaNtAWG496Me9O20baAsNx70Y96dto20BYbj3ox707bRtoCw3HvRj3p22jbQFh1FO20baDeyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyG0U7bRtoCyFooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgB1FNz9KM/SgA/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigBfxo/GkooAX8aPxpKKAF/Gj8aSigAooooICiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilxRigVxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKAuJRS4oxQFxKKXFGKA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J9U/5/Jf++jWVuo3UcoXNX/hJ9U/5/Jf++jR/wAJPqn/AD+S/wDfRrK3UbqOULmr/wAJPqn/AD+S/wDfRo/4SfVP+fyX/vo1lbqN1HKFzV/4SfVP+fyX/vo0f8JPqn/P5L/30ayt1G6jlC5q/wDCT6p/z+S/99Gj/hJ9U/5/Jf8Avo1lbqN1HKFzV/4SfVP+fyX/AL6NH/CT6p/z+S/99GsrdRuo5Quav/CT6p/z+S/99Gj/AISfVP8An8l/76NZW6jdRyhc1f8AhJ9U/wCfyX/vo0f8JPqn/P5L/wB9GsrdRuo5QuJRRRViCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKACijPsKM+woAKKM+woz7CgAooz7CjPsKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF20baTFGKAF3UbqMD1owPWloLQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQN1G6jA9aMD1o0DQOKOKT/PWj/PWgQvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAvFHFJ/nrR/nrQAUUuB60YHrQO4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXEopcD1owPWgLiUUuB60YHrQFxKKXA9aMD1oC4lFLgetGB60BcSilwPWjA9aAuJRS4HrRgetAXDbRtpaKWoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoaibaNtLRRqGom2jbS0UahqJto20tFGoai496Me9N4o4qhXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC47HvRj3pvFHFAXHY96Me9N4o4oC4Z9qM+1MyaMmgzuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFx+fajPtTMmjJoC4/PtRn2pmTRk0Bcfn2oz7UzJoyaAuPz7UZ9qZk0ZNAXH59qM+1MyaMmgLj8+1GfamZNGTQFxdvtRt9qduHrRuHrTHZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZDdvtRt9qduHrRuHrQFkN2+1G32p24etG4etAWQ3b7Ubfanbh60bh60BZEOTRk0uBRgU7mGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1EyaMmlwKMCi4aiZNGTS4FGBRcNRMmjJpcCjAouGomTRk0uBRgUXDUTJoyaXAowKLhqJk0ZNLgUYFFw1HbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgCpsb0NGxvQ1bwPWjA9aAKmxvQ0bG9DVvA9aMD1oAqbG9DRsb0NW8D1owPWgD//Z";var ih="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/wAALCAYABAABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/AMqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii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9rn/AEGtR/8AAp/8aP7e1z/oNaj/AOBT/wCNH9va5/0GtR/8Cn/xo/t7XP8AoNaj/wCBT/40f29rn/Qa1H/wKf8Axo/t7XP+g1qP/gU/+NH9va5/0GtR/wDAp/8AGs6iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivdv8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDbaP8Ahnr/AKm//wApv/22j/hnr/qb/wDym/8A22j/AIZ6/wCpv/8AKb/9to/4Z6/6m/8A8pv/ANto/wCGev8Aqb//ACm//baP+Gev+pv/APKb/wDba8Y8Rad/ZHiDUdJ87z/sV3Lb+Zt279jld2MnGcZxk1Qoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/AGFbr/0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/wCSgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf8A2Fbr/wBGtWFRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX3XRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRXxj8RP+SgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x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iiiiiiiiiiiiiiiiiiiiiiiivjH4if8AJQPEf/YVuv8A0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/5KB4j/wCwrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/YVuv/RrVhUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV910UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV8Y/ET/koHiP8A7Ct1/wCjWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/AGFbr/0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/wCSgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf8A2Fbr/wBGtWFRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX3XRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRXxj8RP+SgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7roooooooooooooooo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iiiiiiiivuuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivjH4if8AJQPEf/YVuv8A0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/5KB4j/wCwrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/YVuv/RrVhUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV910UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV8Y/ET/koHiP8A7Ct1/wCjWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/AGFbr/0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/wCSgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf8A2Fbr/wBGtWFRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX3XRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRXxj8RP+SgeI/+wrdf+jWrCooooooooooooooooooooooooooooooooooooooooooooooooooo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iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivuuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivjH4if8AJQPEf/YVuv8A0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/5KB4j/wCwrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/YVuv/RrVhUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV910UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV8Y/ET/koHiP8A7Ct1/wCjWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf/AGFbr/0a1YVFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfddFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfGPxE/wCSgeI/+wrdf+jWrCoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor7rooooooooooooooooooooooooooooooooooooooooooooooooooooor4x+In/JQPEf8A2Fbr/wBGtWFRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX0n/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45R/wvvwf/0Ddd/78Rf/AByj/hffg/8A6Buu/wDfiL/45R/wvvwf/wBA3Xf+/EX/AMco/wCF9+D/APoG67/34i/+OUf8L78H/wDQN13/AL8Rf/HKP+F9+D/+gbrv/fiL/wCOUf8AC+/B/wD0Ddd/78Rf/HKP+F9+D/8AoG67/wB+Iv8A45Xz94rv4dV8Uatqlusiw3l7NcRrIAGCu5YA4JGcH1rNooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9k=";(function(){let i=document.querySelector(".hero3d");if(!i)return;let t=i.querySelector(".h3-sticky"),e=i.querySelector("#bottleCanvas"),n;try{n=new Oa({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{i.classList.add("no3d");return}let s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.matchMedia("(max-width: 760px)").matches;n.setPixelRatio(Math.min(window.devicePixelRatio||1,r?1.6:2)),n.outputColorSpace=Pe,n.toneMapping=Ss,n.toneMappingExposure=.95;let a=new si,o=new Se(34,1,.1,60);o.position.set(0,.15,7.4);let l=new Gi(n);a.environment=l.fromScene(new za,.04).texture;let c=new vs(15916464,1.35);c.position.set(3.2,4.5,4.5),a.add(c);let u=new kn(14139793,8,20,1.6);u.position.set(-3.4,1.2,-2.6),a.add(u);let d=new kn(13211199,4,8,2);d.position.set(0,-2.2,1.2),a.add(d),a.add(new ys(3807764,.9));let h=3.35,p=oc.aspect*h,x=[],E=oc.profile;x.push(new Ft(.001,0));for(let pt=E.length-1;pt>=0;pt--){let[k,et]=E[pt];x.push(new Ft(Math.max(.02,k)*p,(1-et)*h))}x.push(new Ft(.001,h));let g=new ds(x,96);g.translate(0,-h/2,0);let f=new _s,T=f.load(nh,pt=>{pt.colorSpace=Pe,M.visible=!0,i.classList.add("h3-ready")},void 0,()=>{i.classList.add("no3d")}),C=f.load(ih);T.anisotropy=8;let y=new ps({map:T,roughnessMap:C,roughness:1,metalness:0,clearcoat:1,clearcoatRoughness:.16,envMapIntensity:.28}),A=new ee(g,y),M=new Mn;M.visible=!1,M.add(A);let w=y.clone();w.transparent=!0,w.opacity=.16,w.envMapIntensity=.25;let _=new ee(g,w);_.scale.y=-1,_.position.y=-h-.02,M.add(_),a.add(M);let b={uTime:{value:0},uEnergy:{value:0},uColor:{value:new It(14131786)},uColor2:{value:new It(4070682)}},F=new ee(new us(3.4,72),new Fe({transparent:!0,depthWrite:!1,uniforms:b,vertexShader:`
        varying vec2 vUv;
        void main(){ vUv = uv - .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`
        uniform float uTime; uniform float uEnergy;
        uniform vec3 uColor; uniform vec3 uColor2;
        varying vec2 vUv;
        void main(){
          float d = length(vUv) * 2.0;                       // 0 centro -> 1 borda
          float glow = smoothstep(1.0, 0.0, d);
          glow = pow(glow, 1.6);
          float speed = .22 + uEnergy * 1.1;
          float rings = sin((d * 26.0) - uTime * speed * 6.283) * .5 + .5;
          rings *= smoothstep(.05, .35, d) * smoothstep(1.0, .55, d);
          float ringAmp = .10 + uEnergy * .55;
          vec3 col = mix(uColor2, uColor, glow);
          col += uColor * rings * ringAmp;
          col += vec3(1.0, .92, .72) * pow(glow, 6.0) * (.55 + uEnergy * .8);
          float a = glow * .95 + rings * ringAmp * .35;
          gl_FragColor = vec4(col, a);
        }`}));F.rotation.x=-Math.PI/2,F.position.y=-h/2-.03,a.add(F);let R=s?0:r?90:220,O=null;if(R){let pt=new Float32Array(R*3),k=new Float32Array(R);for(let $=0;$<R;$++)pt[$*3]=(Math.random()-.5)*9,pt[$*3+1]=(Math.random()-.5)*6,pt[$*3+2]=(Math.random()-.5)*4-1,k[$]=Math.random()*100;let et=new Le;et.setAttribute("position",new be(pt,3)),et.setAttribute("aSeed",new be(k,1)),O=new cs(et,new Fe({transparent:!0,depthWrite:!1,blending:Ms,uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:`
        attribute float aSeed; uniform float uTime; uniform float uEnergy;
        varying float vTw;
        void main(){
          vec3 p = position;
          float t = uTime * (.05 + uEnergy * .25);
          p.y += mod(aSeed + t, 6.0) - 3.0 - position.y;   // sobe em loop
          p.x += sin(uTime * .3 + aSeed) * .25;
          vTw = .5 + .5 * sin(uTime * (1.5 + fract(aSeed) ) + aSeed);
          vec4 mv = modelViewMatrix * vec4(p, 1.);
          gl_PointSize = (1.4 + fract(aSeed * 7.3) * 2.4) * (300.0 / -mv.z) * .01 * (1. + uEnergy);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vTw;
        void main(){
          vec2 c = gl_PointCoord - .5;
          float a = smoothstep(.5, .0, length(c)) * vTw * .8;
          gl_FragColor = vec4(1.0, .84, .58, a);
        }`})),a.add(O)}let q=i.querySelectorAll(".h3-act"),Z=i.querySelector(".scroll-cue"),U={p:0,pSmooth:0,vel:0,energy:0,lastScroll:window.scrollY,lastT:performance.now(),mx:0,my:0,mxS:0,myS:0};function H(){let pt=i.getBoundingClientRect(),k=pt.height-window.innerHeight;return k>0?Math.min(1,Math.max(0,-pt.top/k)):0}window.addEventListener("mousemove",pt=>{U.mx=(pt.clientX/window.innerWidth-.5)*2,U.my=(pt.clientY/window.innerHeight-.5)*2},{passive:!0});function V(pt,k,et,$){return Math.min(Math.min(1,Math.max(0,(pt-k)/$)),Math.min(1,Math.max(0,(et-pt)/$)))}let j=[[-.2,.34],[.36,.66],[.68,1.2]],tt=(pt,k,et)=>pt+(k-pt)*et,rt=pt=>pt*pt*(3-2*pt);function at(pt,k,et,$){return pt<.5?tt(k,et,rt(pt*2)):tt(et,$,rt((pt-.5)*2))}function _t(){let pt=t.clientWidth,k=t.clientHeight;n.setSize(pt,k,!1),o.aspect=pt/k,o.updateProjectionMatrix()}window.addEventListener("resize",_t),_t();let Wt=0;function ne(pt){let k=Math.min(.05,(pt-U.lastT)/1e3)||.016;U.lastT=pt,U.p=H(),U.pSmooth=tt(U.pSmooth,U.p,1-Math.pow(.001,k));let et=window.scrollY,$=Math.abs(et-U.lastScroll)/Math.max(1,window.innerHeight);U.lastScroll=et,U.vel=tt(U.vel,Math.min(1.4,$*14),.12),U.energy=tt(U.energy,U.vel,.06);let At=U.pSmooth;s||(Wt+=k*.22);let Lt=Math.PI+At*Math.PI*4+Wt+U.energy*.9;U.mxS=tt(U.mxS,U.mx,.05),U.myS=tt(U.myS,U.my,.05),M.rotation.y=Lt+U.mxS*.25,M.rotation.z=at(At,0,-.52,.06),M.rotation.x=at(At,.02,.16,-.02)+U.myS*.12;let wt=at(At,.32,.55,-1.15)+Math.sin(pt*.001)*(s?0:.05);M.position.y=wt,M.position.x=at(At,0,-1.5,0)*(r?.72:1);let ie=at(At,1,1,.5)*(r?.74:1);M.scale.setScalar(ie),b.uTime.value=pt*.001,b.uEnergy.value=U.energy,F.position.y=wt-h/2*ie-.12,F.position.x=M.position.x,F.scale.setScalar(Math.max(.55,ie)),d.position.set(M.position.x,F.position.y-.3,1.2),d.intensity=3.5+U.energy*7,u.intensity=7+U.energy*10,O&&(O.material.uniforms.uTime.value=pt*.001,O.material.uniforms.uEnergy.value=U.energy),q.forEach((Dt,Xt)=>{let Vt=V(U.p,j[Xt][0],j[Xt][1],.1);Dt.style.opacity=Vt.toFixed(3),Dt.style.visibility=Vt<.01?"hidden":"visible";let kt=U.p>(j[Xt][0]+j[Xt][1])/2?-1:1;Dt.style.transform=`translateY(${((1-Vt)*26*kt).toFixed(1)}px)`}),Z&&(Z.style.opacity=V(U.p,j[0][0],j[0][1],.1).toFixed(3)),n.render(a,o),requestAnimationFrame(ne)}requestAnimationFrame(ne),setTimeout(()=>{i.classList.contains("h3-ready")||i.classList.add("no3d")},5e3)})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
