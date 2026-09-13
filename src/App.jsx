import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function App() {
  const defaultCenter = { lat: 32.0853, lng: 34.7818 };
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 text-center max-w-md">
          <h1 className="text-xl font-medium text-red-600 tracking-tight mb-2">שגיאה בטעינת המפתח</h1>
          <p className="text-gray-600 text-sm">
            המערכת לא מצליחה לקרוא את מפתח גוגל מקובץ ה-.env שלך.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={13}
          defaultCenter={defaultCenter}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}

export default App;