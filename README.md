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

### Objetivos

El objetivo principal es detectar la proximidad de los baños publicos a los principales nucleos de población, y si al estar mas próximos proveen mas servicios. Para poder saber dichos datos hemos tenido que hacer uso del problema del par de puntos mas cercanos: https://en.wikipedia.org/wiki/Closest_pair_of_points_problem así como extraer la lista de las principales ciudades de australia para calcular la distancia hacia estos.

La lista de las principales ciudades de australia la hemos extraido de aquí: https://en.wikipedia.org/wiki/List_of_cities_in_Australia_by_population y de aquí: http://www.geonames.org/AU/largest-cities-in-australia.html

!["Población"](images/population.png)


## Minería de datos

Se ha decidido realizar el trabajo utilizando la herramienta KNIME debido a la sencillez de uso al ser una herramienta visual que hace muy sencillo el poder ir probando las distintas técnicas.

### Pre-procesamiento de datos

Antes de aplicar las técnicas aprendidas en la asignatura realizaremos un pre-procesado de los datos mediante técnicas de estadística descriptiva con el objetivo de conocer nuestro *dataset* para poder utilizar posteriormente las distintas técnicas.

Lo primero de todo hemos agregado un nodo *FileReader* que hemos configurado para leer nuestro dataset, en el mismo se han configurado los tipos de columna ya que por defecto *KNIME* lo lee todo automáticamente como cadenas y muchos de nuestros datos son de tipo booleano y de tipo numérico. Además se han omitido desde el propio *FileReader* algunas columnas que contenían textos que no nos resultan útiles para el procesamientos

Se ha agregado un nodo de estadísticas para ver una primera aproximación visual de los datos que tenemos, hemos visto en los histogramas que la categorización de los elementos no parece del todo correcta, por ejemplo se hace una distinción entre Male, Female y Unisex que no tiene una correlación cuando debería ternerla

!["Estadísticas"](images/statistics_numeric.png)

Para comprobar las observaciones realizadas mediante los histogramas pasamos a realizar una correlación lineal entre las variables con el objetivo de encontrar que las variables observadas tienen cierta correlación con el consumo de alcohol y además comprobar si hay algunas variables con una correlación muy alta lo que puede indicar que se derivan unas de otras y se pueden eliminar del dataset al aportar la misma información.

!["Correlacion"](images/correlation.png)

Como se puede apreciar existen muchas X en esta matriz lo que indica que no existe correlación entre las variables, esto se puede deber a que muchas variables son categóricas y es complicado realizar una correlación entre variables categóricas o entre una variable categórica y otra numérica al no saber cuales son los valores superiores o inferiores.
Las correlaciones más importantes que se observan son:
● Correlación entre las notas de las evaluaciones (G1, G2 y G3).
● Correlación entre la educación de los padres (Medu y Fedu).
● Correlación negativa entre las notas y las asignaturas suspensas el año pasado (failures);
positiva entre las notas, el tiempo de estudio (studytime); positiva entre las notas y la
educación de los padres.
● Correlación entre la vida social (gout) y el tiempo libre (freetime).
● Correlación entre el consumo de alcohol y la vida social.
Destaca esta última correlación que si se observa en un histograma la variable goout y el consumo de alcohol es prácticamente lineal, como se aprecia en la siguiente figura:


## Elementos


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


## Conclusiones





