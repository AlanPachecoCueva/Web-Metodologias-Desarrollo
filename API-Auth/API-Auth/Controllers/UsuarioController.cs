﻿using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http;
using System.Web;
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
        public async Task<string> DeleteMovimientoPlanilla(int codigoMovimiento, string descripcionMovimiento)
        {
            Console.WriteLine("Entra a Eliminar Planilla");
            Console.WriteLine("codigoMovimiento: " + codigoMovimiento + " | descripcionMovimiento: " + descripcionMovimiento);
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var baseUrl = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios";
                    var endpoint = "/MovimeintoPlanillaDelete";
                    var queryParams = $"?codigomovimiento={codigoMovimiento}&descripcionomovimiento={descripcionMovimiento}";
                    var url = baseUrl + endpoint + queryParams;

                    // Agrega los encabezados necesarios si la API los requiere
                    // httpClient.DefaultRequestHeaders.Add("NombreEncabezado", "ValorEncabezado");

                    // Configura la autenticación si es necesario
                    // httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("TipoAutenticacion", "Token");

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

        // ACTUALIZACION DE APIS
        [HttpGet("ListarTrabajadores")]

        public async Task<string> GetTrabajador(String sucursal)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabajadorSelect?sucursal="+sucursal;

                    // Hacer una petición GET a la URL y esperar la respuesta
                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    // Leer el contenido de la respuesta como una cadena de caracteres
                    string responseBody = await response.Content.ReadAsStringAsync();

                    // Mostrar el cuerpo de la respuesta en la consola
                    Console.WriteLine("trabajadoreeeeeeeeeeees");
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
