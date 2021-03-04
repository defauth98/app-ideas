const request = require('request');

const html = {
  divStatus: document.querySelector('.status'),
};

request('https://www.githubstatus.com/', { json: true }, (err, res, body) => {
  const components = body.components;
  const divStatus = html.divStatus;

  for (let i = 0; i < components.length; i++) {
    const statusBlock = document.createElement('div');
    statusBlock.className = 'status-block';

    const name = document.createElement('p');
    const status = document.createElement('p');

    name.innerHTML = components[i].name;
    status.innerHTML = components[i].status;

    statusBlock.appendChild(name);
    statusBlock.appendChild(status);

    divStatus.appendChild(statusBlock);
  }
});
