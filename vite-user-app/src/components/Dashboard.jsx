import React from 'react';

const Dashboard = ({ currentUser, onLogout }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {currentUser.username}!
            </h1>
            <p className="text-gray-600">Manage your account and explore your dashboard</p>
          </div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {currentUser.username.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="w-full p-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Account Details - Takes up 2/3 width on large screens */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">User ID</label>
                  <p className="text-lg font-semibold text-gray-800 mt-1">#{currentUser.id}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Username</label>
                  <p className="text-lg font-semibold text-gray-800 mt-1">{currentUser.username}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</label>
                  <p className="text-lg font-semibold text-gray-800 mt-1">{currentUser.email}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Status</label>
                  <div className="mt-1">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      currentUser.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        currentUser.is_active ? 'bg-green-400' : 'bg-red-400'
                      }`}></span>
                      {currentUser.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Member Since</label>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {new Date(currentUser.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                {currentUser.updated_at && (
                  <div>
                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Last Updated</label>
                    <p className="text-lg font-semibold text-gray-800 mt-1">
                      {new Date(currentUser.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Edit Profile</p>
                      <p className="text-sm text-gray-500">Update information</p>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Security</p>
                      <p className="text-sm text-gray-500">Password & settings</p>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Activity</p>
                      <p className="text-sm text-gray-500">Recent activity</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Sign Out */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Session</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sign out when you're finished.
              </p>
              <button
                onClick={onLogout}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;