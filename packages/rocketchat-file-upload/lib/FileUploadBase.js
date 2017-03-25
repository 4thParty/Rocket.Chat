/* globals FileUploadBase:true, UploadFS */
/* exported FileUploadBase */

UploadFS.config.defaultStorePermissions = new UploadFS.StorePermissions({
	insert(userId/*, doc*/) {
		return userId;
	},
	update(userId, doc) {
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || (RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId);
	},
	remove(userId, doc) {
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || (RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId);
	}
});


FileUploadBase = class FileUploadBase {
	constructor(meta, file) {
		this.id = Random.id();
		this.meta = meta;
		this.file = file;
	}

	getProgress() {

	}

	getFileName() {
		return this.meta.name;
	}

	start() {

	}

	stop() {

	}
};
