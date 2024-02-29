# Cheatsheet

## Markdown

[https://www.markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet)

## [Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

!!! tip
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla.

Styles : `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

## [Formatting](https://squidfunk.github.io/mkdocs-material/reference/formatting/)

### Keyboard keys

++ctrl+alt+del++

### Highlighting

~~This was deleted~~ ==This was marked==

### Sub/Sup

H~2~O A^T^A

### Images

![Image title](https://picsum.photos/200){ loading=lazy }

### List

1.  Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
    sagittis. Aliquam purus tellus, faucibus eget urna at, iaculis venenatis
    nulla. Vivamus a pharetra leo.
    1.  Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet
        quam enim, eu volutpat urna rutrum a. Nam vehicula nunc mauris, a
        ultricies libero efficitur sed.
    1.  Morbi eget dapibus felis. Vivamus venenatis porttitor tortor sit amet
        rutrum. Pellentesque aliquet quam enim, eu volutpat urna rutrum a.

- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

## [Code blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)

``` css title="styles.css"
li + li {
  color: pink;
}

h3 ~ p {
  font-size: 40px;
}
```

### Inline

La classe `.fw-bold` applique du bold.

### Tabs

=== "Sass"

    ``` sass
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```
=== "CSS"

    ``` css
    body {
        font: 100% Helvetica, sans-serif;
        color: #333;
    }
    ```

## Codepen

<iframe height="300" style="width: 100%;" scrolling="no" title="EXERC Scss @function - Uno" src="https://codepen.io/tim-momo/embed/ZEVOLpX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## [Data tables](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

## [Footnotes](https://squidfunk.github.io/mkdocs-material/reference/footnotes/)

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

