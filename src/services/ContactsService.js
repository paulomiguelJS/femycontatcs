import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3000/contacts?orderBy=${orderBy}`,
    );

    await delay(1000);

    return response.json();
  }
}

export default new ContactsService();
