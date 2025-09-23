function addConversationStatusIcons()
{
    // gets the next-prev arrows element in the conv-info element
    // the icons wil sit before the arrows
    const convNextPrev = document.querySelector('.conv-next-prev');

    // creates a ul element to store the icons
    const statusIcons = document.createElement('ul');
    statusIcons.classList.add('status-icons');
    statusIcons.classList.add('conv-status'); // it must have this class for the links to work

    // the array of statuses to be shown
    const statuses = ['Active', 'Pending', 'Closed'];

    // create a 'li' and 'a' element for each status
    statuses.forEach((itemText, index)=> {
        const liElement = document.createElement('li');
        const aElement  = document.createElement('a');

        //aElement.textContent = itemText;
        aElement.href = '#';
        aElement.setAttribute('data-status', index + 1);

        switch (itemText) {
            case "Active":
                aElement.className = "green glyphicon glyphicon-flag";
                break;
            case "Pending":
                aElement.className = "light-grey glyphicon glyphicon-ok";
                break;
            case "Closed":
                aElement.className = "grey glyphicon glyphicon-lock";
                break;
            case "Spam":
                aElement.className = "red glyphicon glyphicon-ban-circle";
                break;
        }

        liElement.appendChild(aElement);
        statusIcons.appendChild(liElement);
    });

    // create a 'li' element that the statusIcons 'ul' element will sit in
    const liStatusIcons = document.createElement('li');

    // adds the icon elements before the arrows
    convNextPrev.before(liStatusIcons);

    // adds the statusIcons 'ul' elements to the 'li' statusIcons elements under conv-info
    liStatusIcons.appendChild(statusIcons);
};

function addReplyStatusIcons()
{
    function setDefaultReplyStatus()
    {
        // finds the selection form that controls the status of the reply
        const replyStatus = document.querySelector('.note-statusbar.note-statusbar-toolbar.form-inline').querySelector("[name='status'].form-control.parsley-exclude");

        // gets rid of the current default status
        replyStatus.querySelector("[selected='selected']").removeAttribute('selected');

        // sets the new default status
        // 1 - Active
        // 2 - Pending
        // 3 - Closed
        replyStatus.setAttribute('data-reply-status', '1');
    };

    setDefaultReplyStatus();

    
};

// splits the URL into an array of strings split by the forward slashes
const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '');

// if we are on the conversation screen...
if (pathSegments[0] == "conversation"){
    // adds the status icons for changing the conversation status
    addConversationStatusIcons();

    // adds the status icons for changing the status set by the reply WHEN the reply icon is clicked
    const replyIcon = document.querySelector('.conv-reply.conv-action.glyphicon.glyphicon-share-alt');
    replyIcon.addEventListener('click', addReplyStatusIcons);
}

