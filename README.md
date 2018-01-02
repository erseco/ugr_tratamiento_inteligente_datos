# National Public Toilet Map

## Introducción

El *Mapa nacional de baños públicos* muestra la ubicación de más de **17.000** baños públicos y privados en toda Australia. Los detalles de las instalaciones sanitarias también se pueden encontrar a lo largo de las principales rutas de viaje y también para viajes más cortos. Se proporciona información útil sobre cada baño, como la ubicación, el horario de apertura, la disponibilidad de habitaciones para bebés, la accesibilidad para personas con discapacidades y los detalles de otros baños cercanos.

Es un *dataset* curioso y perfecto para practicar minería de datos para la asignatura *Tratamiento Inteligente de Datos* del *Master Profesional en Ingeniería Informática*. El *dataset* se puede extraer libremente desde la web: https://data.gov.au/dataset/national-public-toilet-map

### *Dataset*

El *dataset* escogido contiene las estadísticas de los 17.000 baños públicos y privados en toda Australia. Las estadísticas cuentan entre otros con los siguientes datos:

1. toilet name.
2. address.
3. latitude and longitude.
4. general toilet features.
5. location.
6. accessibility.
7. opening hours.
8. additional features (e.g. showers, baby change facilities etc).
9. notes (e.g. coin operated showers etc).

Todos los datos son números enteros a excepción del nombre del jugador, el equipo y la posición que son cadenas de caracteres.

- ToiletID *(integer)*
- URL *(string)*
- Name *(omitido)*
- Address1 *(omitido)*
- Town *(string)*
- State *(string)*
- Postcode *(integer)*
- AddressNote *(omitido)*
- Male *(boolean)*
- Female *(boolean)*
- Unisex *(boolean)*
- DumpPoint *(boolean)*
- FacilityType *(string)*
- ToiletType  *(string)*
- AccessLimited *(boolean)*
- PaymentRequired *(boolean)*
- KeyRequired *(boolean)*
- AccessNote *(omitido)*
- Parking *(boolean)*
- ParkingNote *(omitido)*
- AccessibleMale *(boolean)*
- AccessibleFemale *(boolean)*
- AccessibleUnisex *(boolean)*
- AccessibleNote *(boolean)*
- MLAK *(omitido)*
- ParkingAccessible
- AccessibleParkingNote *(omitido)*
- Ambulant *(boolean)*
- LHTransfer *(omitido)*
- RHTransfer *(omitido)*
- AdultChange *(boolean)*
- IsOpen *(list)*
- OpeningHoursSchedule *(omitido)*
- OpeningHoursNote *(omitido)*
- BabyChange *(boolean)*
- Showers *(boolean)*
- DrinkingWater *(boolean)*
- SharpsDisposal *(boolean)*
- SanitaryDisposal *(boolean)*
- IconURL *(omitido)*
- IconAltText *(omitido)*
- Notes *(omitido)*
- Status *(string)*
- Latitude *(double)*
- Longitude *(double)*


## Minería de datos

Se ha decidido realizar el trabajo utilizando la herramienta KNIME debido a la sencillez de uso al ser una herramienta visual que hace muy sencillo el poder ir probando las distintas técnicas.

### Pre-procesamiento de datos

Antes de aplicar las técnicas aprendidas en la asignatura realizaremos un pre-procesado de los datos mediante técnicas de estadística descriptiva con el objetivo de conocer nuestro *dataset* para poder utilizar posteriormente las distintas técnicas.

Lo primero de todo hemos agregado un nodo *FileReader* que hemos configurado para leer nuestro dataset, en el mismo se han configurado los tipos de columna ya que por defecto *KNIME* lo lee todo automáticamente como cadenas y muchos de nuestros datos son de tipo booleano y de tipo numérico. Además se han omitido desde el propio *FileReader* algunas columnas que contenían textos que no nos resultan útiles para el procesamientos

Se ha agregado un nodo de estadísticas para ver una primera aproximación visual de los datos que tenemos.


Agrupamiento


Clasificación


Regresión



