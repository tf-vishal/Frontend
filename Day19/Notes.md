### Events
    Any Specific interaction or action that happens in the system is called an event. When an event happens, the system will fire a signal that some event just occured. Once you recieve a signla, you can react to that event by doing a particular task.

    - Events can be a:
        - click
        - Hover
        - Keypress
        - Browser Window
        - Resize
        - Form submission
        - video player
        - error

element.addEventListener(<Event>[click], <Handler, this is a callback function>[()=>{}])