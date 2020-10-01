<h1 align="center"> Welcome to Vegefoods organic e-commerce 
    
</h1> 

![vf](https://user-images.githubusercontent.com/33196945/94733069-7edf2480-0367-11eb-8e8a-4555c26c7d8b.jpg)

## General info 
This project is school project about organic products. 

## Technologies 
Project is created with: 
- Javascript (Angular v10 framework) 
- Typescript 
- Bootstrap 4 
- HTML 5 
- CSS 3

## Documentation (Dokumentacija)
Glavna uloga aplikacije je prikaz i kupovina (smeštanje u korpu i narudžbina) organskih proizvoda.
Na sajtu se nalaze ukupno četiri kategorije proizvoda. Proizvodi i kategorije se izvlače iz JSON fajla čija je putanja /assets/data.


Proizvodima i kategorijama se pristupa putem servisa:
- Product service
- Category service

Svaka funkcionalnost u okviru sajta je dodeljena komponenti na koju se odnosi, tako da Cart Component služi za dohvatanje/uklanjanje proizvoda iz korpe, slanje narudžbine. 
Funkcionalnost koja se odnosi na dodavanje proizvoda u korpu je definisana u okviru komponente Product Component.


###### Shop
Prikazuje sve kategorije. Klikom na određenu kategoriju odlazimo na stranicu na kojoj su prikazani proizvodi koji pripadaju toj kategoriji. Formatiranje podataka (pipes) je iskorišćeno u okviru polja description.
Klikom na određeni proizvod prikazuju se sve informacije vezane za taj proizvod. Pruža nam se mogućnost da dodamo proizvod u korpu. U okviru slike svakog proizvoda iskorišćena je animacija.

###### Cart
Prikazuje sve proizvode koje smo dodali u korpu (podaci koji se odnose na korpu se upisuju u LocalStorage). U ovom delu takođe imamo formu za narudžbinu prikazanih proizvoda.



Na sajtu se nalaze dve forme:
###### Kontakt forma (Contact)

![contact](https://user-images.githubusercontent.com/33196945/94735637-5bb67400-036b-11eb-9d71-b1cb76adae42.jpg)



###### Forma za narudžbinu (Cart)

![cart](https://user-images.githubusercontent.com/33196945/94735638-5ce7a100-036b-11eb-8aca-abe27ff8fe00.jpg)
