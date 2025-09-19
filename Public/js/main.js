function addHorizontalStatusIcons()
{
    // gets the next-prev arrows element in the conv-info element
    // the icons wil sit before the arrows
    const convNextPrev = document.querySelector('.conv-next-prev');

    // creates a ul element to store the icons
    const statusIcons = document.createElement('ul');
    statusIcons.classList.add('status-icons');
    statusIcons.classList.add('conv-status'); // it must have this class for the links to work

    // the array of statuses
    const statuses = ['Active', 'Pending', 'Closed', 'Spam'];

    // create a 'li' and 'a' element for each status
    statuses.forEach((itemText, index)=> {
        const liElement = document.createElement('li');
        const aElement  = document.createElement('a');

        // match the 
        aElement.textContent = itemText;
        aElement.href = '#';
        aElement.setAttribute('data-status', index + 1)

        liElement.appendChild(aElement);
        statusIcons.appendChild(liElement);
    });

    // create a 'li' element that the statusIcons 'ul' element will sit in
    const liStatusIcons = document.createElement('li');

    // adds the icon elements before the arrows
    convNextPrev.before(liStatusIcons);

    // adds the statusIcons 'ul' elements to the 'li' statusIcons elements under conv-info
    liStatusIcons.appendChild(statusIcons);
}

addHorizontalStatusIcons();