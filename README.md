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

Casi todos los datos son de tipo booleano, pasamos a continuación a mostrar la lista completa de los campos indicando los que hemos omitido así como los distintos tipos de datos que hemos extraido de ellos.

- ToiletID *(integer)*
- ~~URL~~ *(string)*
- ~~Name~~ *(string)*
- ~~Address1~~ *(string)*
- Town *(string)*
- State *(string)*
- Postcode *(integer)*
- ~~AddressNote~~ *(string)*
- Male *(boolean)*
- Female *(boolean)*
- Unisex *(boolean)*
- DumpPoint *(boolean)*
- FacilityType *(string)*
- ToiletType  *(string)*
- AccessLimited *(boolean)*
- PaymentRequired *(boolean)*
- KeyRequired *(boolean)*
- ~~AccessNote~~ *(string)*
- Parking *(boolean)*
- ~~ParkingNote~~ *(string)*
- AccessibleMale *(boolean)*
- AccessibleFemale *(boolean)*
- AccessibleUnisex *(boolean)*
- AccessibleNote *(boolean)*
- ~~MLAK~~ *(boolean)*
- ParkingAccessible
- ~~AccessibleParkingNote~~ *(string)*
- Ambulant *(boolean)*
- ~~LHTransfer~~ *(boolean)*
- ~~RHTransfer~~ *(boolean)*
- AdultChange *(boolean)*
- IsOpen *(string)*
- ~~OpeningHoursSchedule~~ *(string)*
- ~~OpeningHoursNote~~ *(string)*
- BabyChange *(boolean)*
- Showers *(boolean)*
- DrinkingWater *(boolean)*
- SharpsDisposal *(boolean)*
- SanitaryDisposal *(boolean)*
- ~~IconURL~~ *(string)*
- ~~IconAltText~~ *(string)*
- ~~Notes~~ *(string)*
- Status *(string)*
- Latitude *(double)*
- Longitude *(double)*

### Objectivos

El objetivo es.... **TODO**

## Minería de datos

Se ha decidido realizar el trabajo utilizando la herramienta KNIME debido a la sencillez de uso al ser una herramienta visual que hace muy sencillo el poder ir probando las distintas técnicas.

### Pre-procesamiento de datos

Antes de aplicar las técnicas aprendidas en la asignatura realizaremos un pre-procesado de los datos mediante técnicas de estadística descriptiva con el objetivo de conocer nuestro *dataset* para poder utilizar posteriormente las distintas técnicas.

Lo primero de todo hemos agregado un nodo *FileReader* que hemos configurado para leer nuestro dataset, en el mismo se han configurado los tipos de columna ya que por defecto *KNIME* lo lee todo automáticamente como cadenas y muchos de nuestros datos son de tipo booleano y de tipo numérico. Además se han omitido desde el propio *FileReader* algunas columnas que contenían textos que no nos resultan útiles para el procesamientos

Se ha agregado un nodo de estadísticas para ver una primera aproximación visual de los datos que tenemos.



## Elementos

### Unidimensional

### Bidimensional

### Datos principales (PCA)




## Análisis descriptivo

### Clustering

### Medidas de bondad

### Interpretacion




## Análisis predictivo

### Clasificando

### Regresión

### Asociacion

## Conclusiones.



