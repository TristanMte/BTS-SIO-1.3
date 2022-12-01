function calcul_moyenne(){
    var note1=prompt("Quelle est la premiere note? Coeff. 2");
    var note2=prompt("Quelle est la deuxieme note? Coeff. 2");
    var note3=prompt("Quelle est la troisieme note? Coeff. 2");
    var note4=prompt("Quelle est la quatrieme note? Coeff. 3");

    var somme= Number(note1*2) + Number(note2*2) + Number(note3*2) + Number(note4*3);

    var moyenne= somme/9;
    
    document.write("Voici la somme des notes: "+ somme+ "  |  ");
    
    document.write("Voici la moyenne des notes: "+ moyenne+ "  |  ");

    if (moyenne<10)
        document.write("Redoublement...");
        else
        document.write("Admis!")
}

function age_test(){
    var age=prompt("Quel est votre age?");
    
    document.write("Vous avez: "+ age+ " ans |  ");

    if (age<18)
        document.write("Vous etes donc mineur.");
        else
        document.write("Vous etes donc majeur.")
}

function affichage_simple(){
    var nom=prompt("Quel est votre nom?");
    var prenom=prompt("Quel est votre prenom?");

    document.write("<div style='background-color: #e4b69b; border: 2px solid #B0E0E6; height: 30px; width=25%>; border-radius: 26px;text-align: center; font-weight: bold;'")
    document.write("<p1 style='color: black'>Bonjour "+ prenom +" "+nom+" !</p1>")
    document.write("</div>")
}

function test_color(){
    var couleur =prompt("Donner une couleur");
    if (couleur == "rouge"|| couleur == "Rouge"|| couleur == "ROUGE"|| couleur == "rOUGE")
        document.body.style.background="red"
    else if (couleur == "orange"|| couleur == "Orange"|| couleur == "ORANGE"|| couleur == "oRANGE")
        document.body.style.background="orange"
    else if (couleur == "jaune"|| couleur == "Jaune"|| couleur == "JAUNE"|| couleur == "jAUNE")
        document.body.style.background="yellow"
    else if (couleur == "vert"|| couleur == "Vert"|| couleur == "VERT"|| couleur == "vERT")
        document.body.style.background="green"
    else if (couleur == "bleu"|| couleur == "Bleu"|| couleur == "BLEU"|| couleur == "bLEU")
        document.body.style.background="blue"
    else if (couleur == "violet"|| couleur == "Violet"|| couleur == "VIOLET"|| couleur == "vIOLET")
        document.body.style.background="violet"
    else
        alert("Couleur non répertoriée")
    }

function somme(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)+ Number(b);
    t3.value=s;
}

function soustraction(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)- Number(b);
    t3.value=s;
}

function produit(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)* Number(b);
    t3.value=s;
}

function division(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)/ Number(b);
    t3.value=s;
}

function parite(){
    var x= Number(document.getElementById("t1").value);
    if (x%2==0)
        t3.value="Nombre pair"
    else
        t3.value="Nombre impair"
}

function permute(){
    var a= document.getElementById("t1").value;
        var tmp=0, x, nbr, y;
                nbr = Number(document.getElementById("t1").value);
                y = nbr;
                while(nbr > 0)
                {
                        x = nbr%10;
                        nbr = parseInt(nbr/10);
                        tmp = tmp*10+x;
                }
                t1.value=tmp;
    var b= document.getElementById("t2").value;
        var tmp=0, x, nbr, y;
        nbr = Number(document.getElementById("t2").value);
        y = nbr;
        while(nbr > 0)
        {
            x = nbr%10;
            nbr = parseInt(nbr/10);
            tmp = tmp*10+x;
        }
        t2.value=tmp;
}

function releve(){
    var a= document.getElementById("n1").value;
    var b= document.getElementById("n2").value;
    var c= document.getElementById("n3").value;

    var d= document.getElementById("o1").value;
    var e= document.getElementById("o2").value;
    var f= document.getElementById("o3").value;

    var s= Number(a)*Number(d) + Number(b)*Number(e) + Number(c)*Number(f);
    var t= Number(s)/(Number(d)+Number(e)+Number(f))

    p1.value=t;

    if (t<8)
        p2.value=("Redoublement...");
    else if (t<10)
        p2.value=("Rattrapages");
    else if (t<12)
        p2.value=("Admis Passable");
    else if (t<14)
        p2.value=("Admis Mention Assez bien");
    else if (t<16)
        p2.value=("Admis Mention Bien");
    else if (t<=20)
        p2.value=("Admis Mention Très bien");
    else if (t>20)
        alert("Erreur")
}