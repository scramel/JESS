<template>
  <div>
    <BoardBackgorund>
      <NavBar />
      <div class="py-5 text-center text-white font-weight-bold">
        <h1 class="py-5 text-uppercase font-weight-bold">
          Nuestros servicios
        </h1>
      </div>
    </BoardBackgorund>
    <b-container>
      <b-row>
        <b-col lg="12" class="pt-5 pb-5 text-center buttons-services">
          <b-button squared class="mr-5 text-uppercase" variant="outline-primary" @click="scrollToElement('import-and-export')">
            importación y exportación
          </b-button>
          <b-button squared class="mr-5 text-uppercase" variant="outline-primary" @click="scrollToElement('shipping-agency')">
            agencia naviera
          </b-button>
          <b-button squared class="mr-5 text-uppercase" variant="outline-primary" @click="scrollToElement('brokerage')">
            brokeraje
          </b-button>
          <b-button squared  class="text-uppercase" variant="outline-primary" @click="scrollToElement('other')">
            servicios adicionales
          </b-button>
        </b-col>
      </b-row>

      <b-row id="import-and-export" class="py-5">
        <b-col lg="4" class="overflow-hidden sm-mb  ">
          <img src="@/assets/images/bg-3.jpg" alt="bg-2" height="500px" style="transform: translateX(-25%)">
        </b-col>
        <b-col offset-lg="1" lg="7">
          <h2 class="text-uppercase font-weight-semibold">
            Importación y Exportación
          </h2>
          <h6 class="font-weight-semibold">
            Nuestra propuesta incluye una amplia variedad de servicios adicionales, tales como:
          </h6>
          <div class="text-services">
            <b-row>
              <b-col>
                <ul>
                  <li>Asesoría en Clasificación Arancelaria.</li>
                  <li>Evaluación de costos de Importación y Exportación.</li>
                  <li>Asesoría en temas de Valoración Aduanera.</li>
                  <li>Asesoría en determinación de origen, incluyendo ROV's (Respuestas Oficiales Vinculantes).</li>
                  <li>Asesoría sobre el Régimen Legal Arancelario.</li>
                  <li>Asistencia en aplicación de la normativa del MERCOSUR.</li>
                  <li>Asesoramiento Integral en Comercio Internacional.</li>
                  <li>Gestión de Tramitación y Despacho Aduanero.</li>
                  <li>Administración de Operaciones con Cartas de Crédito.</li>
                </ul>
              </b-col>
              <b-col>
                <ul>
                  <li>Gestión Aduanera de mudanzas internacionales Particulares, Comerciales e Industriales.</li>
                  <li>Investigación estadística de importaciones, por empresa o por posición arancelaria.</li>
                  <li>Importación temporal, seguimiento y cancelación de garantías.</li>
                  <li>Gestión y obtención de seguros de caución.</li>
                  <li>Importación genera de Bienes.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-row class="py-5 board-bg mx-0">
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-9.jpg')})`"/>
      <div class="board-bg__gradient board-bg__gradient--blue board-bg__gradient--filtered position-absolute"/>
      <b-container id="shipping-agency">
        <b-row class="text-white py-5">
          <b-col class="mb-4" lg="7">
            <h3 class=" text-uppercase font-weight-bold">
              Agencia Naviera
            </h3>
            <div class="text-services">
              <br>
              <h6>
                Estamos en la capacidad de dar servicios de agencias generales en Venezuela, a las líneas de buques que dentro de sus itinerarios fijos recalan en los puertos de La Guaira, Puerto Cabello, Guanta y Maracaibo.
              </h6>
              <br>
              <p>
                Nuestra labor es la de velar por los intereses de nuestros clientes en todo el territorio nacional, atender a sus buques y su tripulaciones, velar por los contenedores en el país, asumir los compromisos administrativos y legales ante las autoridades, marítimas, aduanales y militares en todo el territorio nacional, vender comercialmente sus servicios marítimos, (fletes), para sus cargas de importación y exportación, velar ante la jurisdicción duanal correspondiente, la carga de tránsito o transbordo, asumir todos los compromisos administrativos que pueda generar las cargas que pudieran entrar en régimen legal de abandono en las aduanas, velar por el cumplimiento de sus operaciones  engranar los protocolos operativos dentro de la legislación legal del país, en fin asumir n gran compromiso en nombre de nuestros clientes para su óptimo desempeño:
              </p>
              <br>
              <b-row>
                <b-col>
                  <ul>
                    <li>Agenciamiento de buque</li>
                    <li>Atención a la tripulación</li>
                    <li>Carga y descarga de buque</li>
                    <li>Comisión por fletes de exportación</li>
                    <li>Comisión por carga de importación</li>
                  </ul>
                </b-col>
                <b-col>
                  <ul>
                    <li>Manejo de sus contenedores vacíos</li>
                    <li>Manejo de sus contenedores llenos</li>
                    <li>Reparación de contenedores</li>
                    <li>Control de contenedores</li>
                  </ul>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col offset="1" lg="4" class="overflow-hidden">
            <img src="@/assets/images/bg-8.jpg" alt="bg-8" height="500px" style="transform: translateX(-25%)">
          </b-col>
        </b-row>
      </b-container>
    </b-row>

    <b-container id="brokerage">
            <b-row class="py-5">
        <b-col lg="4" class="overflow-hidden sm-mb">
          <img src="@/assets/images/bg-10.jpg" alt="bg-10" height="365px" style="transform: translateX(-25%)">
        </b-col>
        <b-col offset-lg="1" lg="7">
          <h2 class="text-uppercase font-weight-semibold">
            Servicio de brokerage
          </h2>
          <p class="text-services">
            Nuestra función es mantener una estrecha relación comercial y operativa con armadores para poder ofrecerle a nuestros clientes los buques que necesiten para el transporte marítimo de las cargas.
          </p>
          <b-row class="text-services">
            <b-col class="py-3">
              <h6 class="py-3 font-weight-semibold">
                Dentro de las especificaciones de buques que tenemos disponibles están:
              </h6>
              <ul>
                <li>Tanquero.</li>
                <li>LPG.</li>
                <li>Granelero.</li>
                <li>Multipropósitos - cargas con over high y/o over weight.</li>
                <li>Buques para carga contenerizada.</li>
              </ul>
            </b-col>
            <b-col class="py-3 ">
              <h6 class="py-3 font-weight-semibold">
                Podemos ofrecer contratos de fletamento acorde a la operación a llevar adelante, dentro de los cuales puedes estar:
              </h6>
              <ul>
                <li>Fletamento a casco desnudo.</li>
                <li>Fletamento por tiempo.</li>
                <li>Fletamento por viaje.</li>
                <li>Fletamento o contrato tipo COA.</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-row class="py-5 board-bg mx-0" >
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-1.jpg')})`"/>
      <div class="board-bg__gradient position-absolute board-bg__gradient--blue board-bg__gradient--filtered "/>
      <b-container id="other">
        <b-row class="text-white py-5">
          <b-col class="mb-4" lg="12">
            <h3 class="text-uppercase font-weight-bold">
              SERVICIOS ADICIONALES
            </h3>
          </b-col>
          <b-col v-for="(service, index) in services" :key="index" lg="4" class="list-sm-fix">
            <div class="px-3 mb-5">
              <div class="position-absolute numbered-list__number text-center">
                <div class="numbered-list__text">
                  {{ index + 1 }}
                </div>
              </div>
              {{ service }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <ThanksFooter />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from '@/components/Footer.vue'
import BoardBackgorund from '@/components/BoardBackgorund.vue'
import ThanksFooter from '@/components/ThanksFooter.vue'
import { services } from './data.js'
export default {
  name: 'ServicesView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund,
    ThanksFooter
  },
  data() {
    return {
      services
    }
  },
  methods: {
    scrollToElement(id) {
      const el = document.getElementById(id)
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        this.$nextTick(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        })
      }
    }
  },
  mounted() {
    this.scrollToElement(this.$route.hash.substring(1))
  }
}
</script>

<style lang="scss">
  .text-services {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
  }
  .buttons-services {
    @media only screen and (max-width: 768px) {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button { margin-top: 1rem; margin-right: 0 !important; }
    }
  }
</style>
