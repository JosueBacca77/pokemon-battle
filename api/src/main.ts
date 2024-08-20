import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json, urlencoded } from 'express'
import { AppModule } from './app.module'

/**
 * This function initializes the NestJS application, sets up global pipes and prefixes, enables CORS,
 * configures body parsers, sets up Swagger documentation, and starts listening on the specified port.
 */
async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule)

  // Set up global pipes for request validation
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      stopAtFirstError: true,
      validationError: { target: false },
      transform: true,
    }),
  )

  // Set the global prefix for all routes
  app.setGlobalPrefix(process.env.SERVICE_PREFIX)

  // Enable Cross-Origin Resource Sharing (CORS)
  app.enableCors()

  // Configure body parsers for handling JSON and URL encoded data
  app.use(json({ limit: '5mb' }))
  app.use(urlencoded({ extended: true, limit: '5mb' }))

  // Set up Swagger documentation
  // const config = new DocumentBuilder()
  //   .setTitle('DIGOR core')
  //   .setDescription('The DIGOR core API description')
  //   .setVersion('0.1')
  //   .addTag('DIGOR core')
  //   .build()

  // const document = SwaggerModule.createDocument(app, config)
  // SwaggerModule.setup('docs', app, document)


  // Start listening on the specified port
  await app.listen(process.env.PORT)

  // Log the port where the application is listening
  console.log(`App listen in port ${process.env.PORT}`)
  // Log the URL where the Swagger documentation is accessible
  // console.log(`Swagger documentation is running on ${await app.getUrl()}/docs`)
}
bootstrap()
