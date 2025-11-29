import * as Article from "@/registry/bricks/components/article";

/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 */

export default function Page() {
  return (
    <main className="p-20">
      <Article.Root>
        <Article.Title>Hello</Article.Title>
        <Article.Subtitle>
          This is ment to be a description of hello.
        </Article.Subtitle>

        <Article.Heading headingLevel="level-1" id="heading-level-1">
          Heading Level 1
        </Article.Heading>

        <Article.Paragraph>
          Lorem{" "}
          <Article.TextStyle underline strikethrough subscript>
            ipsum
          </Article.TextStyle>{" "}
          dolor sit amet consectetur adipisicing elit. Ab similique, rerum fuga
          quibusdam fugiat dolore doloremque soluta aut error architecto! Alias
          incidunt sint magnam deserunt ex expedita quidem enim unde praesentium
          repellendus dicta nobis nam facere optio, earum consectetur minus
          maxime! Ex commodi doloribus natus repudiandae voluptates magnam animi
          quibusdam voluptas aperiam, iure numquam non! Odio inventore incidunt
          accusamus porro. Amet minus deserunt tempora rerum quo nulla
          cupiditate, hic, assumenda corrupti maiores sunt ipsam nostrum
          ducimus! Voluptatum qui velit fugiat porro id at sapiente. Magni sint,
          dolor nemo doloremque amet numquam accusamus saepe ex, totam labore
          aperiam, nam ducimus repellendus
        </Article.Paragraph>

        <Article.Ul variant={"task-list"}>
          <Article.Task>Hello</Article.Task>
          <Article.Task checked>Hello</Article.Task>
        </Article.Ul>

        <Article.Ol variant={"default"}>
          <Article.Li>hello</Article.Li>
          <Article.Li>hello</Article.Li>
        </Article.Ol>

        <Article.Paragraph>
          <Article.Link href="/">Hello</Article.Link>
        </Article.Paragraph>

        <Article.Image src="https://placehold.co/600x400" />
        <Article.Image src="/images/bg-city.webp" />

        <Article.Heading headingLevel="level-2" id="heading-level-2">
          Heading Level 2
        </Article.Heading>

        <Article.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maiores atque culpa eligendi ipsum, magni labore ipsa recusandae
          voluptatum repudiandae deleniti sint ex voluptas est debitis facere
          minus officiis consequatur tempora eius ducimus nemo numquam. Labore
          fuga quisquam officia quibusdam exercitationem deleniti maiores
          cumque. Quasi dicta eligendi corrupti. Itaque laudantium esse
          exercitationem voluptatibus necessitatibus culpa tenetur commodi quam
          molestiae! Obcaecati accusamus facere nisi neque tempore veniam
          eveniet itaque maiores similique? Sunt, ipsam beatae placeat odio
          deleniti non animi inventore ab consectetur nemo assumenda rerum
          numquam debitis totam hic tempora, porro maiores molestiae. Qui quia
          praesentium voluptate unde consequuntur animi vero fugiat consectetur
          illum recusandae vitae illo commodi voluptates blanditiis nulla
          accusamus numquam veritatis laborum, pariatur, atque quo expedita
          autem earum. Recusandae commodi maxime ducimus incidunt praesentium
          officia aut quisquam sint cumque, quasi repellat libero porro delectus
          earum blanditiis tenetur corrupti cupiditate cum facere provident
          fuga. Quaerat fugiat odit labore tenetur ipsam explicabo quidem eum
          aliquid accusantium, facere dolores enim odio accusamus reiciendis,
          reprehenderit sapiente sed! Ipsa praesentium reprehenderit pariatur
          nobis sequi error eum eius, aspernatur illum odio nisi a rem ratione
          perferendis laboriosam doloremque aliquam repellendus sit numquam non?
          Voluptates porro vero reprehenderit, quae doloribus dicta dolorum
          rerum a, laudantium exercitationem omnis odit sapiente dolor quidem
          recusandae? Illum quis dolores animi officia debitis accusamus nemo
          ullam cupiditate dolorum facilis in suscipit autem alias itaque unde
          ex commodi fuga sint deleniti, aut nostrum ea consequuntur sapiente
          aliquam. Earum quos cumque, quidem velit ducimus ex, repudiandae
          quisquam at molestias adipisci ab recusandae est nostrum deserunt quae
          sed enim debitis voluptatibus nulla, cupiditate sapiente sint cum
          mollitia dolorum? Nihil pariatur non modi dolorem molestiae
          doloremque, similique repellendus ex suscipit quia ab soluta magnam,
          eveniet nisi illum? Similique, expedita ducimus itaque voluptates
          deserunt reiciendis perferendis dicta. Numquam laudantium, error
          magnam iste est dolorem dolorum.
        </Article.Paragraph>

        <Article.Heading headingLevel="level-3" id="heading-level-3">
          Heading Level 3
        </Article.Heading>

        <Article.Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          ullam temporibus architecto nobis nam adipisci necessitatibus, natus
          expedita id provident dicta deleniti neque aliquid perspiciatis quod
          aliquam voluptates in itaque. Dolore culpa consequuntur deleniti
          veritatis et, quasi architecto adipisci sapiente consequatur obcaecati
          minima, molestiae officia corporis accusantium tempora maiores, natus
          iusto. Aliquam vel aspernatur aperiam exercitationem provident beatae
          eveniet ex ad quia, amet repellendus temporibus magni, doloribus
          debitis adipisci asperiores. Veniam atque, tempore molestias explicabo
          ducimus eveniet vitae? Corporis, pariatur neque voluptatum, itaque
          maiores doloremque aut voluptatem recusandae possimus dicta natus
          error obcaecati repellendus. Ab laboriosam tempore eius culpa unde.
        </Article.Paragraph>

        <Article.Heading headingLevel="level-4" id="heading-level-4">
          Heading Level 4
        </Article.Heading>

        <Article.Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
          consequuntur suscipit rerum mollitia vero unde sapiente, voluptate
          recusandae doloribus corporis, reprehenderit ex cum fugit eum illum!
          Pariatur optio et odio, odit omnis laudantium molestiae molestias,
          rerum cum temporibus totam ad illo, dolores autem necessitatibus!
          Aliquam sunt exercitationem esse dignissimos nam ipsam repellat
          dolorum natus sequi voluptatem magnam illo quas officiis, nisi
          suscipit, corrupti hic totam vero harum. Labore, et repudiandae
          cupiditate sequi cumque nulla vitae repellat maiores optio iste
          excepturi doloribus voluptatum fugiat hic magnam praesentium
          dignissimos odit dolores incidunt! Distinctio illo aperiam eius vero.
          Natus quae, possimus reiciendis perferendis nostrum aperiam
          perspiciatis molestiae nulla quam facere reprehenderit animi unde
          iusto dolor deleniti autem. Sapiente ipsa distinctio consequatur
          reiciendis esse culpa autem molestiae, corporis ut nam alias mollitia
          exercitationem ab cumque explicabo possimus odit aut tempora iure modi
          est. Iusto consequuntur architecto suscipit vitae, mollitia dolores!
          Aperiam reiciendis delectus nobis odit aliquam vitae repellendus minus
          fugit optio quaerat omnis laboriosam illo unde, veritatis rem,
          assumenda saepe, debitis laborum iure repellat nam quae nulla mollitia
          possimus? Sequi provident amet velit unde eius? Quo, labore excepturi.
          Iusto numquam, corrupti suscipit fugit, sit quas quaerat, accusamus
          eos magni facere exercitationem cupiditate necessitatibus impedit
          maxime. Saepe nemo architecto minima possimus aliquid ipsa provident
          consequatur alias.
        </Article.Paragraph>

        <Article.Heading headingLevel="level-5" id="heading-level-5">
          Heading Level 5
        </Article.Heading>
      </Article.Root>
    </main>
  );
}
