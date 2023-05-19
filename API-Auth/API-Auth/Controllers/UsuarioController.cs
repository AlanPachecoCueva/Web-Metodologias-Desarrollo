using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http;
using static System.Net.WebRequestMethods;

namespace API_Auth.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {

        

            private readonly ILogger<UsuarioController> _logger;

            public UsuarioController(ILogger<UsuarioController> logger)
            {
                _logger = logger;
            }
        //http://apiservicios.ecuasolmovsa.com:3009/api/Usuarios?usuario=5001&password=5001u
        [HttpGet(Name = "getUser")]
        
        public async Task<string> Get(string usuario, string password)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Usuarios?usuario=" + usuario + "&password=" + password;

                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error) {
                return ("erooor: "+ error);
            }
        }

        [HttpGet("Emisores")]
        
        public async Task<string> Get()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/GetEmisor";

                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("Costos")]

        public async Task<string> GetEmisores()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosSelect";

                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("DeleteCentroDeCosto")]

        public async Task<string> DeleteCentroDeCostos(int codigoCentroCostos, String descripcioncentrocostos)
        {
            Console.WriteLine("Entra a Eliminar");
            Console.WriteLine("codigoCentroCostos: ", codigoCentroCostos, " | descripcioncentrocostos: ", descripcioncentrocostos);
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosDelete?codigocentrocostos="+codigoCentroCostos+"&descripcioncentrocostos="+ descripcioncentrocostos;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        
        
            [HttpGet("UpdateCentroDeCosto")]

        public async Task<string> UpdateCentroDeCostos(String codigoCentroCostos, String descripcioncentrocostos)
        {
            Console.WriteLine("codigoCentroCostos: ", codigoCentroCostos, " | descripcioncentrocostos: ", descripcioncentrocostos);
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosUpdate?codigocentrocostos="+codigoCentroCostos+ "&descripcioncentrocostos="+descripcioncentrocostos ;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }


        [HttpGet("CreateCentroDeCosto")]

        public async Task<string> CreateCentroDeCostos(String codigoCentroCostos, String descripcioncentrocostos)
        {
            Console.WriteLine("codigoCentroCostos: ", codigoCentroCostos, " | descripcioncentrocostos: ", descripcioncentrocostos);
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosInsert?codigocentrocostos=" + codigoCentroCostos + "&descripcioncentrocostos=" + descripcioncentrocostos;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("SearchCentroDeCosto")]

        public async Task<string> SearchCentroDeCostos(String descripcioncentrocostos)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosSearch?descripcioncentrocostos="+ descripcioncentrocostos;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }


        // ACTUALIZACION DE APIS
         [HttpGet("ListarPlanillas")]

        public async Task<string> GetPlanillas()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaSelect";

                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("DeleteMovimientoPlanilla")]

        public async Task<string> DeleteMovimientoPlanilla(int codigoMovimiento, String descripcionMovimiento)
        {
            Console.WriteLine("Entra a Eliminar Planilla");
            Console.WriteLine("codigoMovimiento: ", codigoMovimiento, " | descripcionMovimiento: ", descripcionMovimiento);
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimeintoPlanillaDelete?codigomovimiento="+codigoMovimiento+"&descripcionomovimiento="+descripcionMovimiento;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("SearchMovimientoPlanilla")]

        public async Task<string> SearchMovimientoPlanilla(String concepto)
        {
            Console.WriteLine("SearchMovimientoPlanilla");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaSearch?Concepto="+concepto;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("CreateMovimientoPlanilla")]

        public async Task<string> CreateMovimientoPlanilla(String concepto, int prioridad, String tipoOperacion, String c1, String c2, String c3, String c4, String me1, String me2, String me3, String Traba_Aplica_iess, String Traba_Proyecto_imp_renta, String Aplica_Proy_Renta, String Empresa_Afecta_Iess)
        {
            Console.WriteLine("CreateMovimientoPlanilla");
            try
            {
                Console.WriteLine("Traba_Aplica_iess, Traba_Proyecto_imp_renta, Aplica_Proy_Renta, Empresa_Afecta_Iess: ", Traba_Aplica_iess, Traba_Proyecto_imp_renta, Aplica_Proy_Renta, Empresa_Afecta_Iess);
                using (var httpClient = new HttpClient())
                {
                    String url1 = "hola";
                    //if(Traba_Aplica_iess.CompareTo("") == 0){
                    //    //url1 = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert?conceptos="+concepto+"&prioridad="+prioridad+"&tipooperacion="+tipoOperacion+"&cuenta1="+c1+"&cuenta2="+c2+"&cuenta3="+c3+"&cuenta4="+c4+"&MovimientoExcepcion1="+me1+"&MovimientoExcepcion2="+me2+"&MovimientoExcepcion3="+me3+"&Traba_Proyecto_imp_renta="+Traba_Proyecto_imp_renta+"&Aplica_Proy_Renta="+Aplica_Proy_Renta+"&Empresa_Afecta_Iess="+Empresa_Afecta_Iess;
                    //    Traba_Aplica_iess = "";
                    //}

                    //if(Traba_Proyecto_imp_renta.CompareTo("-") == 0){
                    //    //url1 = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert?conceptos="+concepto+"&prioridad="+prioridad+"&tipooperacion="+tipoOperacion+"&cuenta1="+c1+"&cuenta2="+c2+"&cuenta3="+c3+"&cuenta4="+c4+"&MovimientoExcepcion1="+me1+"&MovimientoExcepcion2="+me2+"&MovimientoExcepcion3="+me3+"&Traba_Aplica_iess="+Traba_Aplica_iess+"&Aplica_Proy_Renta="+Aplica_Proy_Renta+"&Empresa_Afecta_Iess="+Empresa_Afecta_Iess;
                    //    Traba_Proyecto_imp_renta = "";
                    //}

                    //if(Aplica_Proy_Renta.CompareTo("-") == 0){
                    //    //url1 = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert?conceptos="+concepto+"&prioridad="+prioridad+"&tipooperacion="+tipoOperacion+"&cuenta1="+c1+"&cuenta2="+c2+"&cuenta3="+c3+"&cuenta4="+c4+"&MovimientoExcepcion1="+me1+"&MovimientoExcepcion2="+me2+"&MovimientoExcepcion3="+me3+"&Traba_Aplica_iess="+Traba_Aplica_iess+"&Traba_Proyecto_imp_renta="+Traba_Proyecto_imp_renta+"&Empresa_Afecta_Iess="+Empresa_Afecta_Iess;
                    //    Aplica_Proy_Renta = "";
                    //}

                    //if(Empresa_Afecta_Iess.CompareTo("-") == 0){
                    //    //url1 = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert?conceptos="+concepto+"&prioridad="+prioridad+"&tipooperacion="+tipoOperacion+"&cuenta1="+c1+"&cuenta2="+c2+"&cuenta3="+c3+"&cuenta4="+c4+"&MovimientoExcepcion1="+me1+"&MovimientoExcepcion2="+me2+"&MovimientoExcepcion3="+me3+"&Traba_Aplica_iess="+Traba_Aplica_iess+"&Traba_Proyecto_imp_renta="+Traba_Proyecto_imp_renta+"&Aplica_Proy_Renta="+Aplica_Proy_Renta;
                    //    Empresa_Afecta_Iess = "";
                    //}+ "&Traba_Aplica_iess=" + Traba_Aplica_iess + "&Traba_Proyecto_imp_renta=" + Traba_Proyecto_imp_renta + "&Aplica_Proy_Renta=" + Aplica_Proy_Renta+ "&Empresa_Afecta_Iess="+ Empresa_Afecta_Iess
                    url1 = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert?conceptos=" + concepto + "&prioridad=" + prioridad + "&tipooperacion=" + tipoOperacion + "&cuenta1=" + c1 + "&cuenta2=" + c2 + "&cuenta3=" + c3 + "&cuenta4=" + c4 + "&MovimientoExcepcion1=" + me1 + "&MovimientoExcepcion2=" + me2 + "&MovimientoExcepcion3=" + me3 ;


                    // Hacer una petición GET a la URL y esperar la respuesta
                    Console.Write("URL: ", url1);
                    HttpResponseMessage response = await httpClient.GetAsync(url1);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine("CreateMovimientoPlanilla result");
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

    [HttpGet("TipoOperacion")]

        public async Task<string> GetTipoOperacion()
        {
            Console.WriteLine("GetTipoOperacion()");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoOperacion";


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("MovimientosExcepcion12")]

        public async Task<string> GetMovimientosExcepcion12()
        {
            Console.WriteLine("MovimientosExcepcion12()");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientosExcepcion1y2";


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("MovimientosExcepcion3")]

        public async Task<string> GetMovimientosExcepcion3()
        {
            Console.WriteLine("MovimientosExcepcion3()");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientosExcepcion3";


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("TrabaAfectaIESS")]

        public async Task<string> GetTrabaAfectaIESS()
        {
            Console.WriteLine("GetTrabaAfectaIESS()");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabaAfectaIESS";


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("TrabAfecImpuestoRenta")]

        public async Task<string> GetTrabAfecImpuestoRenta()
        {
            Console.WriteLine("GetTrabAfecImpuestoRenta()");
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabAfecImpuestoRenta";


                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                //return "Holi";
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }


    }
}
