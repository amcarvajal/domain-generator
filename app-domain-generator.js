let pronoun = ['the','our'];
let adj = ['great', 'big','small'];
let noun = ['jogger','racoon'];

let domain =[pronoun, adj, noun];



for(i = 0; i < pronoun.length; i++){
    //console.log(domain[i]);
    for(j = 0; j < adj.length; j++){
        for(k = 0; k < noun.length; k++){
            console.log(pronoun[i] + adj[j] + noun[k]+".com");
            document.getElementById("content").textContent = pronoun[i] + adj[j] + noun[k]+".com";
        }
    }   
}
  