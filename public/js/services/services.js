'use strict';
angular.module('ngDay2App')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/protected-garden-8476'),
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/protected-garden-8476/:id'),
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	});