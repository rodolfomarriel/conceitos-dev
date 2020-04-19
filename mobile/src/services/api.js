import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
 *  iOS com Emulador: localhost
 *  iOS com físico: IP da máquina
 *  Android com Emulador: localhost (adb reverse)
 * CMD => adb reverse tcp:3000 tcp:3000 (redirecionamento de porta)
 *  Android com Emulador: 10.0.2.2 (Android Studio)
 *  Android com Emulador: 10.0.3.2 (Genymotion)
 *  Anroid com físico: IP da máquina
 * */