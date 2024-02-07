import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto py-20 px-12'>
        <h1 className='font-bold text-center'>Regulamin Świadczenia Usług Związanych z Profilami Google My Business</h1>
        <br />
        <ul className='list-decimal'>
            <li>
                <h3>Definicje:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Usługa Prowadzenia Wizytówki (399 zł/miesiąc brutto):</h5>
                        <ul className='list-initial pl-3'>
                            <li >W ramach tej usługi oferujemy prowadzenie i zarządzanie profilem biznesowym na platformie Google My Business.</li>
                            <li>Nasze obowiązki obejmują m.in. dodawanie atrakcyjnych zdjęć, postów, zarządzanie opiniami oraz pomoc w weryfikacji i pozycjonowaniu wizytówki.</li>
                        </ul>
                    </li>

                    <li>
                        <h5>Usługa Prowadzenia Wizytówki + Opinie (650 zł/miesiąc brutto):</h5>
                        <ul className='list-initial pl-3'>
                            <li>Obejmuje wszystkie elementy Usługi Prowadzenia Wizytówki.</li>
                            <li> Dodatkowo, aktywne pozyskiwanie nowych opinii, zarządzanie nimi, dodawanie postów oraz zgłaszanie negatywnych komentarzy.</li>
                        </ul>
                    </li>

                    <li>
                        <h5>Usługa Nowe Opinie Google (249 zł/miesiąc brutto):</h5>
                        <ul className='list-initial pl-3'>
                            <li>Skoncentrowana na pozyskiwaniu nowych opinii na platformie Google My Business, z polubieniami opinii oraz pomocą w regulaminowych działaniach.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            {/* 2 Ceny i płatności */}

            <li>
                <h3>Ceny i Płatności:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li><h5 >Każda usługa ma ustaloną cenę miesięczną podaną w złotych brutto.</h5></li>
                    <li><h5>Płatności są wymagalne do 10. dnia każdego miesiąca.</h5></li>
                    <li><h5>Nowi klienci zwolnieni są z opłaty za pierwszy miesiąc.</h5></li>
                </ul>
            </li>

            {/* 3 Okres umowy */}

            <li>
                <h3>Okres Umowy:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li><h5>Umowa obowiązuje na okres miesięczny.</h5></li>
                    <li><h5>Klient może wypowiedzieć umowę z miesięcznym wypowiedzeniem.</h5></li>
                </ul>
            </li>
            
            {/* 4 Obowiązki wykonawcy */}

            <li>
                <h3>Obowiązki Wykonawcy:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Prowadzenie Wizytówki:</h5>
                        <ul className='list-initial pl-3'>
                            <li>Dodawanie atrakcyjnych treści, zarządzanie opiniami, pomoc w weryfikacji i pozycjonowaniu.</li>
                        </ul>
                    </li>     
                    <li>
                        <h5>Prowadzenie Wizytówki + Opinie:</h5>
                        <ul className='list-initial pl-3'>
                            <li>Wszystkie elementy Usługi Prowadzenia Wizytówki.</li>
                            <li>Aktywne pozyskiwanie nowych opinii, zarządzanie nimi, dodawanie postów, zgłaszanie negatywnych komentarzy.</li>
                        </ul>
                    </li>     
                    <li>
                        <h5> Nowe Opinie Google:</h5>
                        <ul className='list-initial pl-3'>
                            <li>Wszystkie elementy Usługi Prowadzenia Wizytówki.</li>
                            <li> Pozyskiwanie nowych opinii, polubień, oraz regulaminowa pomoc.</li>
                        </ul>
                    </li>     
                </ul>
            </li>
            
            {/* 5 Odpowiedzialność wykonawcy */}

            <li>
                <h3>Odpowiedzialność Wykonawcy:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Wykonawca ponosi odpowiedzialność za zgodność świadczonych usług z opisem.</h5>             
                    </li>     
                    <li>
                        <h5>Wykonawca nie odpowiada za utratę dostępu do profilu Google z winy Klienta.</h5> 
                    </li>     
                </ul>
            </li>
            
            {/* 6 Odpowiedzialność klienta */}

            <li>
                <h3>Odpowiedzialność Klienta:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Klient zobowiązuje się dostarczyć wszystkie niezbędne informacje do realizacji usługi.</h5>             
                    </li>     
                    <li>
                        <h5>Klient odpowiada za zamieszczane treści na platformie Google My Business.</h5> 
                    </li>     
                </ul>
            </li>
            
            {/* 7 Wypoweidzenie umowy */}

            <li>
                <h3>OWypowiedzenie Umowy:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Klient może wypowiedzieć umowę na piśmie z miesięcznym wypowiedzeniem.</h5>             
                    </li>     
                    <li>
                        <h5>Wykonawca może wypowiedzieć umowę w razie nieterminowej płatności lub naruszenia postanowień umowy przez Klienta.</h5> 
                    </li>     
                </ul>
            </li>
            {/* 8 Postanowienie końcowe */}

            <li>
                <h3>Postanowienia Końcowe:</h3>
                <ul className='list-lower-alpha my-3'>
                    <li>
                        <h5>Zmiany w regulaminie są możliwe tylko na piśmie i po uzgodnieniu obu stron.</h5>             
                    </li>     
                    <li>
                        <h5>Umowa może być przerwana za zgodą obu stron.</h5> 
                    </li>     
                    <li>
                        <h5>Obie strony zobowiązują się do rzetelnego wypełniania postanowień umowy.</h5> 
                    </li>     
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default page