# National Public Toilet Map

> Ernesto Serrano Collado

## Introducción

El *Mapa nacional de baños públicos* muestra la ubicación de más de **17.000** baños públicos y privados en toda Australia. Los detalles de las instalaciones sanitarias también se pueden encontrar a lo largo de las principales rutas de viaje y también para viajes más cortos. Se proporciona información útil sobre cada baño, como la ubicación, el horario de apertura, la disponibilidad de habitaciones para bebés, la accesibilidad para personas con discapacidades y los detalles de otros baños cercanos.

Es un *dataset* curioso y perfecto para practicar minería de datos para la asignatura *Trataiento Inteligente de Datos* del *Master Profesional en Ingeniería Informática*. El *dataset* se puede extraer libremente desde la web: https://data.gov.au/dataset/national-public-toilet-map

### *Dataset*

El *dataset* escogido contiene las estadísticas de los 17,000 baños públicos y privados en toda Australia. Las estadísticas cuentan con los siguientes datos:

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
- Name *(string)*
- Address1 *(string)*
- Town *(string)*
- State *(string)*
- Postcode *(integer)*
- AddressNote *(string)*
- Male *(boolean)*
- Female *(boolean)*
- Unisex *(boolean)*
- DumpPoint *(boolean)*
- FacilityType *(string)*
- ToiletType  *(string)*
- AccessLimited *(boolean)*
- PaymentRequired *(boolean)*
- KeyRequired *(boolean)*
- AccessNote
- Parking
- ParkingNote
- AccessibleMale
- AccessibleFemale
- AccessibleUnisex
- AccessibleNote
- MLAK
- ParkingAccessible
- AccessibleParkingNote
- Ambulant
- LHTransfer
- RHTransfer
- AdultChange
- IsOpen
- OpeningHoursSchedule
- OpeningHoursNote
- BabyChange
- Showers
- DrinkingWater
- SharpsDisposal
- SanitaryDisposal
- IconURL
- IconAltText
- Notes
- Status
- Latitude
- Longitude


## Minería de datos

Se ha decidido realizar el trabajo utilizando las herramientas R y KNIME debido a la potencia de la primera ya la sencillez de uso de la segunda.

### Pre-procesamiento de datos

La primera fase será la de realizar un pre-procesado de los datos mediante técnicas de estadística descriptiva con el objetivo de conocer nuestro *dataset* para poder realizar posteriormente otras tareas.
