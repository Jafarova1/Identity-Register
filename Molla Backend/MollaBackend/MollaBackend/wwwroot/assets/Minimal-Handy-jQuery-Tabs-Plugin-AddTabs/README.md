# AddTabs

> 1.1.0

Another basic jQuery Tab plugin.

```html
<div data-addui='tabs'>
  <div role='tabs'>
    <div>Tab 1</div>
    <div>Tab 2</div>
    <div>Tab 3</div>
  </div>
  <div role='contents'>
    <div>
      <p>Tab 1 Content</p>
    </div>
    <div>
      <p>Tab 2 Content</p>
    </div>
    <div>
      <p>Tab 3 Content</p>
    </div>
  </div>
</div>
```

![](res/tabs.gif)

## How to Use
Copy the files from the distribution directory 'dist/' into your project and include them into your document.

Mimic the HTML above replacing the tabs labels and content with your labels and content.

## Settings
The only setting this plugin contains is weather or not to change the tab on "click" or "hover". The settings is called `change`, it is set to `"click"` (default) and it can be set to `"hover"`.

You can set this setting by giving the `data-change="hover"` attribute to the tab container.

```html
<div data-addui='tabs' data-change="hover">
  <div role='tabs'>
    <div>Tab 1</div>
    <div>Tab 2</div>
    <div>Tab 3</div>
  </div>
  <div role='contents'>
    <div>
      <p>Tab 1 Content</p>
    </div>
    <div>
      <p>Tab 2 Content</p>
    </div>
    <div>
      <p>Tab 3 Content</p>
    </div>
  </div>
</div>
```

## Theme
All [**AddUI**] widgets are themed using SASS. To edit the theme of this widget open `src/addTabs.scss`. The following variables are used by this widget:

### `$theme`
This can be set to `"dark"` or `"light"`. `"dark"` is for use on darker backgrounds, and `"light"` is for use on lighter backgrounds.

### `$primary`
The primary variable is used to indicate the active tab.


When you are finished editing these variables recompile the file using your preferred [LibSass](http://sass-lang.com/libsass).

# License

This software is property of [Dustin Poissant](http://github.com/dustinpoissant/).

This software is distributed AS-IS with no warranties/guarantees either expressed or implied.

This software is Licensed under [CC BY-NC-SA 3.0 US](https://creativecommons.org/licenses/by-nc-sa/3.0/us/).
