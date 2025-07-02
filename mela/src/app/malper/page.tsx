// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
import React from 'react'

function page() {
  return (
    <>
      <main className="flex-grow container mx-auto py-8">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Kabe */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/KABE.jpg"
              alt="Kabe"
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Kabe û Mekke</h3>
            <p className="text-gray-600">
              Agahî û wêne li ser Kabe, Mêk û girîngiya wan di Îslamê de.
            </p>
            <a href="/malper/mmavahi/mmmweb" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir bixwîne
            </a>
          </div>

          {/* Card 2: Cami */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="Camii.jpg"
              alt="Cami"
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mizgeft û Civak</h3>
            <p className="text-gray-600">
              Wêne û agahî li ser mizgeftan, civak û rolê wan di jiyana Îslamî de.
            </p>
            <a href="/malper/mmavahi/mmmobile" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir bixwîne
            </a>
          </div>
      
          {/* Card 3: Qur'an */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/QURAN.jpg"
              alt="Qur'an"
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Qur'an û Xebatên Zanistî</h3>
            <p className="text-gray-600">
              Zanîn û şîrove li ser Qur'an, tefsîr û xebatên zanistî ya Îslamî.
            </p>
            <a href="/malper/mmavahi/mmai" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir bixwîne
            </a>
          </div>
           <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Destpêk</h3>
            <p className="text-gray-600">
              Bismillahirahmanirahim<br />
              Elhamdulillahirrabbulalemin<br />
              Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain<br />
              Elhamdulillahirabbulalemin<br />
              Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain<br />
              Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah<br />
              Subhanallah, Elhamdulillah, Allahu Ekber<br />
              Estağfirullah El-Azim<br />
              La ilahe illallah, Muhammedur Resulullah
            </p>
            <a href="/malper/mmavahi/mmai" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir bixwîne
            </a>
          </div>
        </div>
      
        {/* Recent Updates Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Nûvekirinên Dawîn</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Serlêdana "Feqî" - alîkarê zana ya Îslamî ya bi zimanê Kurdî dest pê kir.</li>
            <li>Babêtên nû yên tefsîr û fikhê hate zêdekirin.</li>
            <li>Kursên xwendina Qur'anê bi awayekî dijîtal dest pê kir.</li>
            <li>Serlêdana malpera me ya nû bi dizaynek nû ve hat vekirin.</li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default page