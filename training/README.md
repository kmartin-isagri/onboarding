# Welcome to Bobbee

### Project setup
```zsh
$ yarn install
```
<br>

### Starting Project
```
$ yarn serve
```
---
## Cours

[VueJS Class Component](https://class-component.vuejs.org/guide/class-component.html)

[Vuetify](https://vuetifyjs.com/en/)

---
## Exercices
<br>

### Exercice 1

Créer un *v-text-field* et afficher le nombre de caractère contenu dans le *v-text-field* juste a coté

<br>


### Exercice 2

Créer un bouton qui incrémente un compteur, et qui s'affiche sur la page.
Créer un autre bouton qui décrémente de compteur

<br>

### Exercice 3

A partir du compteur de l'exercice précédent, créer une boucle qui affiche l'index. 
Si l'index est divisible par 3, afficher "Bob"; si il est divisible par 5, afficher "bee"; et si il est divisible par 3 et 5, afficher "Bobbee"

<br>

### Exercice 4

Avec le JSON ci-dessous, créer un album photo type Instagram, ou l'on peut liker et commenter les différentes photo

```js
album = {
    "name": "Mon album photo",
    "other": "Your Name",
    "photos": [
        {
            "name": "Plante",
            "url": "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "1"
        },
        {
            "name": "Koala",
            "url": "https://images.pexels.com/photos/7243591/pexels-photo-7243591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "2"
        },
        {
            "name": "Tortue",
            "url": "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "3"
        },
        {
            "name": "Montagne",
            "url": "https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "4"
        },
        {
            "name": "Ville",
            "url": "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "5"
        },
        {
            "name": "Théatre",
            "url": "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "6"
        },
        {
            "name": "Foret",
            "url": "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "7"
        },
        {
            "name": "Ciel",
            "url": "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "8"
        },
        {
            "name": "Fruits",
            "url": "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "9"
        },
        {
            "name": "Lion",
            "url": "https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "10"
        },
        {
            "name": "Café",
            "url": "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "id": "12"
        }
    ]
}
```

<br>

### Exercice 5

Si ce n'est pas fait, à partir de l'exercice précédent, convertir les photos en composant (Chaque composent intègre le nom, le photo, les commentaires, ainsi que le fait qu'elle soit liké ou non)