<script setup>
const supabase = useSupabaseClient();
const datas = ref();
const nama = ref();
const instansi = ref();
const alamat = ref();
async function getdata() {
  const { data, error } = await supabase
    .from("Pengunjung")
    .select("id,nama,instansi,alamat");
  datas.value = data;
  async function updateData() {}
}
async function updateData() {
  const { error } = await supabase
    .from("Pengunjung")
    .update({
      nama: nama.value,
      instansi: instansi.value,
      alamat: alamat.value,
    })
    .eq("id", 1);
}
onMounted(() => {
  getdata();
});
</script>

<template>
  <div>
    <div class="w-1/3 m-auto mt-10">
      <h1 class="text-slate-300 font-semibold text-center my-5 text-2xl">
        Update Buku Tamu
      </h1>
      <form @submit.prevent="updateData()">
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            v-model="nama"
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >{{ datas.nama }}</label
          >
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="Instansi"
            id="Instansi"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            v-model="instansi"
          />
          <label
            for="Instansi"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Instansi</label
          >
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="alamat"
            id="alamat"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            v-model="alamat"
          />
          <label
            for="alamat"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Alamat</label
          >
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right mr-16 my-5 transition duration-3000 hover:transform absolute"
          :class="
            $data[
              ClassObject ? 'hover:translate-x-[160px]' : 'hover:translate-x-0'
            ]
          "
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
