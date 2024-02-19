import axios from 'axios';

function main() {
  axiosTest().then((response) => {
    console.log(response.data);
  });
}

async function axiosTest() {
  return axios.get('https://raw.githubusercontent.com/jikan-me/jikan-rest/master/storage/api-docs/api-docs.json');
}

main();
