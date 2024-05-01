let P = []; //dari solve()
let t = []; //dari solve()
let r; 
let K; 
let P0 = 20; 
let dt = 0.1;
let tMax = 10;

let grafik; 

function setup() {
  createCanvas(400,400);
  
  r = createInput(""); 
  r.position(20, 40)
  K = createInput(""); 
  K.position(20, 60)
  let p = createP('Konstanta Pertumbuhan')
  p.style('fontsize', '14px');
  p.position(20,0);
  
  solve();
  r.changed(solve);
  K.changed(solve);
  
  grafik = new Chart(this, config);
}

function draw() {
  background(220);
  
  grafik.update();

  
}


function solve(){
  
  P[0] = P0;
  t[0] = 0;
  rs = float(r.value());
  Ks = float(K.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt*rs*P[i]*(1 - P[i]/Ks);
    t[i+1] = round((i+1)*dt,3);
  }
}