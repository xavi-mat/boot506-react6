# React - Miniproject

Exercise for [The Bridge](https://thebridge.tech).

## Summary
* A React mini-project to practice all basic React elements already seen.
* Implement a "News Web"
* Use the [NYT News API](https://developer.nytimes.com/apis).
* Use React Router
* Use nested components (header, home, footer, form, news list).
* Use React Context
* Use SASS

## Development

### API
The NYT News API has some problems with credentials. We have used the
[Bing News API](https://www.microsoft.com/en-us/bing/apis/bing-news-search-api),
accessed through [rapidapi](https://rapidapi.com).

### Page structure
Every route builds a page with three components: Header and Footer are common to
all of them. The Header has three buttons, with `<Link />`, to access to the
three routes, and a Country selector with three options: USA, Spain, France.

### Routes
**Home** `/` It shows three blocks:
* The first five headlines, as clickable items in an "item list".
* A side bar with add-like images.
* A big image, just to fill the space.

**News List** `/news-list`
* A flex-wrap block with 10 news in cards. With headline, short description, small
side image and a "Read more" button with the link.

**Home** `/form`
aa

### Bootstrap

* Responsive

### SASS




### 1. Página de noticias

* Vamos a englobar todo lo visto estos días con un miniproyecto con React
utilizando [News API](https://developer.nytimes.com/apis) vista principal de la
página
* Implementa React Router en tu página
    * `/home`. Home de la app
    * `/form`. Formulario para crear noticia
    * `/list`. Lista detallada de noticias

* Componentes mínimos
    * Header
    * Home.
    * Form.
        * Formulario de alta de nueva noticia.
        * Guardar formulario en el local storage
        * Tras dar de alta debes redirigir a ListNews
    * ListNews. Pinta las noticias
    * Footer

* Importante el diseño
* Utilizar context
* Utilizar SASS
* Readme Excelente!!!

### 2. Extra
* Que sea responsive


