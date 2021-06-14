const NotificationHelper = {
    sendNotification({
        title,
        option
    }) {

        if (!this._isSupported()) {
            console.log('Notification not supported in this browser');
            return;
        }

        if (!this._isPermitted()) {
            console.log('User did not yet granted permission');
            this._requestPermission();
            return;
        }

        this._showNotification({
            title,
            option
        });
    },


    // cek browser support notification

    _isSupported() {
        return !!('Notification' in window);
    },
    // cek notifikasi di ijinkan atau tidak
    _isPermitted() {

        return Notification.permission === 'granted';
    },


    async _requestPermission() {
        const status = await Notification.requestPermission();


        if (status === 'denied') {
            console.log('Notification denied');
        }

        if (status === 'denied') {
            console.log('Permission closed');
        }

    },

    async _showNotification({
        title,
        option
    }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, option);
    },






};



export default NotificationHelper;